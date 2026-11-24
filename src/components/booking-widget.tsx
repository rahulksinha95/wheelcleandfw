'use client';

export default function BookingWidget() {
  return (
    <section 
      className="booking-section"
      style={{
        padding: '4rem 1rem',
        background: '#f8f9fa',
        position: 'relative',
        zIndex: 1,
      }}
    >
      <div style={{ maxWidth: '920px', margin: '0 auto' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '1.5rem', fontSize: '2rem', fontWeight: 600 }}>
          Schedule Your Cleaning
        </h2>

        <div
          style={{
            width: '100%',
            height: '720px',
            borderRadius: '12px',
            overflow: 'hidden',
            boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
            background: '#fff',
          }}
        >
          <iframe
            src="https://wheelcleandfw.simplybook.me/v2/?widget-type=iframe&theme=air&timeline=modern&datepicker=top_calendar"
            title="Book a WheelCleanDFW appointment"
            style={{
              width: '100%',
              height: '100%',
              border: 'none',
              display: 'block',
            }}
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}