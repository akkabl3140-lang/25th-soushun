"use client";

import React, { useState, useEffect } from "react";

type Seat = {
  id: string;
  rowLabel: string;
  number: number;
  status: "available" | "reserved";
};

const API_URL = "https://script.google.com/macros/s/AKfycbyqHS-8v6xd4pn2nXFsCHoytJ5yWpvtRT7FDoAW_Xxvf483MjF9J_6jIcX6wToU33Lwkg/exec";

export default function SeatReservation() {
  const [reservationId, setReservationId] = useState("");
  const [allowedSeats, setAllowedSeats] = useState<number>(0);
  const [seats, setSeats] = useState<Seat[]>([]);
  const [selectedSeats, setSelectedSeats] = useState<string[]>([]);
  const [isVerified, setIsVerified] = useState(false);

  // -----------------------------
  // 座席生成（4-9-4）
  // -----------------------------
  useEffect(() => {
    const layout = [4, 9, 4];
    const rowLabels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").slice(0, 13);
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
  // 予約ID確認
  // -----------------------------
  const checkReservation = async () => {
    const res = await fetch(
      `${API_URL}?reservation_id=${reservationId}`
    );
    const data = await res.json();

    if (!data.success || data.status !== "unused") {
      alert("予約IDが無効です");
      return;
    }

    setAllowedSeats(Number(data.people));
    setIsVerified(true);
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
      alert(`選択できるのは${allowedSeats}席まで`);
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

    const res = await fetch(API_URL, {
      method: "POST",
      body: formData,
    });

    const data = await res.json();

    if (!data.success) {
      alert(data.message);
      return;
    }

    alert("予約完了！");
  };

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

      {isVerified && (
        <>
          <p>予約人数：{allowedSeats}名</p>

          <div className="seat-map">
            {seats.map((seat) => (
              <div
                key={seat.id}
                className={`seat 
                  ${seat.status} 
                  ${
                    selectedSeats.includes(seat.id)
                      ? "selected"
                      : ""
                  }`}
                onClick={() => toggleSeat(seat.id)}
              >
                {seat.id}
              </div>
            ))}
          </div>

          <button onClick={confirmReservation}>
            予約確定
          </button>
        </>
      )}
    </div>
  );
}
