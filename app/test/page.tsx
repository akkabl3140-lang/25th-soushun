"use client";

import React, { useState, useEffect } from "react";
import "./SeatReservation.css";

type Seat = {
  id: string;
  rowLabel: string;
  number: number;
  status: "available" | "reserved";
};

const API_URL = "https://script.google.com/macros/s/AKfycbyqHS-8v6xd4pn2nXFsCHoytJ5yWpvtRT7FDoAW_Xxvf483MjF9J_6jIcX6wToU33Lwkg/exec";
type CuteAlertProps = {
  message: string;
  onClose: () => void;
  duration?: number; // 自動で消えるまでの時間(ms)
};

export function CuteAlert({ message, onClose, duration = 2000 }: CuteAlertProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // 消える前にアニメーションをスタート
    const timer = setTimeout(() => setIsVisible(false), duration);
    return () => clearTimeout(timer);
  }, [duration]);

  // アニメーション終了後に親に閉じる通知
  const handleAnimationEnd = () => {
    if (!isVisible) onClose();
  };

  return (
    <div className="fixed top-1/4 left-1/2 -translate-x-1/2 z-50">
      <div
        className={`bg-pink-50 border-2 border-pink-300 rounded-2xl p-6 text-center shadow-lg
                    ${isVisible ? "animate-fadeIn" : "animate-fadeOut"}`}
        onAnimationEnd={handleAnimationEnd}
      >
        <p className="text-pink-600 font-semibold text-lg mb-2">{message}</p>
      </div>
    </div>
  );
}
export default function SeatReservation() {
  const [reservationId, setReservationId] = useState("");
  const [allowedSeats, setAllowedSeats] = useState<number>(0);
  const [seats, setSeats] = useState<Seat[]>([]);
  const [selectedSeats, setSelectedSeats] = useState<string[]>([]);
  const [isVerified, setIsVerified] = useState(false);
  const [alertMessage, setAlertMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  // -----------------------------
  // 座席生成（4-9-4）
  // -----------------------------
  useEffect(() => {
    const layout = [4, 9, 4];
    const rowLabels = "XYZABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").slice(0, 13);
    const generatedSeats: Seat[] = [];

    rowLabels.forEach((rowLabel) => {
      let seatNumber = 1;
      layout.forEach((count) => {
        for (let i = 0; i < count; i++) {
          generatedSeats.push({
            id: `${rowLabel}-${seatNumber}`,
            rowLabel,
            number: seatNumber,
            status: "available",
          });
          seatNumber++;
        }
      });
    });

    setSeats(generatedSeats);
  }, []);
  // -----------------------------
  // 予約済み座席の読み込み
  // -----------------------------
  useEffect(() => {
    if (seats.length === 0) return;

    const loadReservedSeats = async () => {
      const res = await fetch(API_URL + "?mode=reservedSeats");
      const data = await res.json();

      if (!data.success) return;

      setSeats(prev =>
        prev.map(seat =>
          data.seats.includes(seat.id)
            ? { ...seat, status: "reserved" }
            : seat
        )
      );
    };

    loadReservedSeats();
  }, [seats]);


  // -----------------------------
  // 予約ID確認
  // -----------------------------
  const checkReservation = async () => {
    if (!reservationId) return;

    setLoading(true); // ←ここでローディング開始
    try {
      const res = await fetch(`${API_URL}?reservation_id=${reservationId}`);
      const data = await res.json();

      if (!data.success || data.status !== "unused") {
        setAlertMessage("予約IDが無効です");
        return;
      }

      setAllowedSeats(Number(data.people));
      setIsVerified(true);
    } catch (err) {
      setAlertMessage("通信に失敗しました");
    } finally {
      setLoading(false); // ←ここでローディング終了
    }
  };

  // -----------------------------
  // 座席クリック
  // -----------------------------
  const toggleSeat = (seatId: string) => {
    if (!isVerified) return;

    const seat = seats.find((s) => s.id === seatId);
    if (!seat || seat.status === "reserved") return;

    if (
      !selectedSeats.includes(seatId) &&
      selectedSeats.length >= allowedSeats
    ) {
      setAlertMessage(`選択できるのは${allowedSeats}席まで`);
      return;
    }

    setSelectedSeats((prev) =>
      prev.includes(seatId)
        ? prev.filter((id) => id !== seatId)
        : [...prev, seatId]
    );
  };

  // -----------------------------
  // 予約確定
  // -----------------------------
  const confirmReservation = async () => {
    const formData = new URLSearchParams();
    formData.append("reservation_id", reservationId);
    formData.append("seats", selectedSeats.join(","));
    setLoading(true);
    const res = await fetch(API_URL, {
      method: "POST",
      body: formData,
    });

    const data = await res.json();

    if (!data.success) {
      alert(data.message);
      return;
    }
    setSeats(prev =>
      prev.map(seat =>
        selectedSeats.includes(seat.id)
          ? { ...seat, status: "reserved" }
          : seat
      )
    );
    setLoading(false);
    setSelectedSeats([]);
    setAlertMessage("予約完了！");
  };
  const renderSeat = (seat: Seat) => (
    <div
      key={seat.id}
      className={`seat ${seat.status} ${selectedSeats.includes(seat.id) ? "selected" : ""
        }`}
      onClick={() => toggleSeat(seat.id)}
    >
      {seat.id}
    </div>
  );

  return (
    <div>
      <h2>座席予約</h2>

      {!isVerified && (
        <>
          <input
            value={reservationId}
            onChange={(e) => setReservationId(e.target.value)}
            placeholder="予約ID"
          />
          <button onClick={checkReservation}>確認</button>
        </>
      )}
      {loading && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white bg-opacity-90 p-6 rounded-2xl shadow-lg text-center animate-fadeIn">
            <p className="text-gray-700 font-semibold">少々お待ちください… ⏳</p>
          </div>
        </div>
      )}
      {isVerified && (
        <>
          <p>予約人数：{allowedSeats}名</p>

          <div className="theater">
            <div className="seat-area">

              <div className="stage">STAGE</div>

              <div className="seat-map">
                {Array.from(new Set(seats.map((s) => s.rowLabel))).map((rowLabel, rowIndex) => {
                  const rowSeats = seats.filter((s) => s.rowLabel === rowLabel);

                  const leftSeats = rowSeats.slice(0, 4);    // 左ブロック
                  const centerSeats = rowSeats.slice(4, 13); // 中央ブロック
                  const rightSeats = rowSeats.slice(13, 17); // 右ブロック
                  const isFloorRow = ["X", "Y", "Z"].includes(rowLabel);

                  return (
                    <div
                      key={rowLabel}
                      className={`seat-row ${isFloorRow ? "floor-row" : "riser-row"}`}
                    >
                      {/* ★ここが追加：左の補足 */}
                      <div className="row-info">
                        <div className="row-label">{rowLabel}列</div>
                        <div className="row-note">
                          {isFloorRow ? "フロア席" : "段差席"}
                        </div>
                      </div>
                      <div className="seat-block">{leftSeats.map(renderSeat)}</div>
                      <div className="aisle"></div>
                      <div className="seat-block">{centerSeats.map(renderSeat)}</div>
                      <div className="aisle"></div>
                      <div className="seat-block">{rightSeats.map(renderSeat)}</div>
                    </div>
                  );
                })}

              </div>
            </div>
          </div>

          <button onClick={confirmReservation}>
            予約確定
          </button>
        </>
      )}
      {alertMessage && (
        <CuteAlert
          message={alertMessage}
          onClose={() => setAlertMessage(null)}
        />
      )}

    </div>
  );
}

