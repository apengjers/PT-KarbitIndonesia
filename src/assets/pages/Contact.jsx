// src/pages/Contact.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Contact() {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  // simple validation
  const isValid = name.trim() && phone.trim() && message.trim();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isValid) {
      alert("Mohon lengkapi Nama, Nomor HP, dan Pesan.");
      return;
    }

    const text = `Halo Karbit Indonesia, saya ${name}${company ? " dari " + company : ""}. Pesan: ${message} (hp: ${phone})`;
    const url = `https://api.whatsapp.com/send?phone=6282113780480&text=${encodeURIComponent(text)}`;

    // buka WA di tab baru
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div>
      <h2 className="text-center mb-4">Map PT Karbit Indonesia</h2>

      <div className="row g-4 justify-content-center">
        <div className="col-12 col-lg-7">
          <div className="map-card map-wrapper bg-white p-0 mt-4">
            <iframe
              src="https://maps.google.com/maps?width=600&height=400&hl=en&q=Universitas%20Gunadarma%20J1&t=&z=14&ie=UTF8&iwloc=B&output=embed"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              title="Peta lokasi PT Karbit Indonesia"
              style={{ width: "100%", height: "100%", minHeight: 300, border: 0, display: "block" }}
            ></iframe>
          </div>

          <div className="mt-2 small text-muted">
            <strong>Alamat:</strong>
            <br />
            Jl. KH. Noer Ali, Jakasampurna, Kec. Bekasi Barat
            <br />
            <strong>Telepon:</strong> +62 895-3853-03546
          </div>
        </div>

        <div className="col-12 col-lg-5">
          <div className="form-card bg-white p-4">
            <h5 className="mb-2">Hubungi via WhatsApp</h5>
            <p className="text-muted small mb-3">Lakukan Pengisian Form dibawah ini.</p>

            <form id="waForm" onSubmit={handleSubmit} noValidate>
              <div className="mb-3">
                <label htmlFor="name" className="form-label small">Nama *</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  className="form-control form-control-sm"
                  placeholder="Nama kamu"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="company" className="form-label small">Perusahaan / Instansi (opsional)</label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  className="form-control form-control-sm"
                  placeholder="PT / CV / dll"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="phone" className="form-label small">Nomor HP *</label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  className="form-control form-control-sm"
                  placeholder="+62 8xx xxxx xxxx"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="message" className="form-label small">Pesan *</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="form-control form-control-sm"
                  placeholder="Tulis pesan singkat..."
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>

              <div className="d-flex align-items-center gap-2">
                <button
                  type="submit"
                  className="btn wa-btn btn-sm d-flex align-items-center"
                  disabled={!isValid}
                >
                  {/* svg same as before, keep it or use fontawesome */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-whatsapp me-2"
                    viewBox="0 0 16 16"
                  >
                    {/* path as in your original SVG */}
                    <path d="M13.601 2.326A7.94 7.94 0 0 0 8.001.5C3.589.5 .5 3.589.5 8c0 1.4.366 2.77 1.061 3.99L.5 15.5l3.637-1.034A7.493 7.493 0 0 0 8 15.5c4.411 0 7.5-3.089 7.5-7.5 0-1.997-.77-3.88-2.299-5.674zM8.001 14a6.47 6.47 0 0 1-3.327-.94l-.237-.14-2.16.615.61-2.103-.154-.264A6.468 6.468 0 0 1 1.5 8c0-3.592 2.909-6.5 6.5-6.5 1.73 0 3.346.67 4.55 1.887C13.83 5.154 14.5 6.732 14.5 8c0 3.591-2.909 6-6.499 6z"/>
                    <path d="M11.3 9.17c-.154-.077-.909-.448-1.05-.498-.144-.05-.25-.077-.355.077-.102.154-.396.498-.485.602-.09.102-.18.115-.334.038-.154-.077-.65-.239-1.238-.763-.458-.409-.766-.913-.855-1.067-.09-.154-.01-.237.067-.314.07-.07.154-.18.232-.269.077-.09.102-.154.154-.256.05-.102.023-.192-.011-.269-.035-.077-.355-.855-.486-1.17-.128-.307-.258-.264-.355-.269l-.304-.005c-.102 0-.269.038-.411.179-.143.142-.546.533-.546 1.299 0 .766.558 1.506.636 1.611.077.102 1.102 1.682 2.67 2.35 1.87.845 2.733.747 3.03.622.097-.05.91-.372 1.04-.736.129-.364.129-.676.09-.742-.035-.064-.128-.102-.282-.18z"/>
                  </svg>
                  Kirim ke WhatsApp
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
