import './index.css'
import { useState } from 'react'

function App() {

const [loanAmount, setLoanAmount] = useState(1200000)
const [interestRate, setInterestRate] = useState(4.5)
const [years, setYears] = useState(25)

const monthlyRate = interestRate / 100 / 12
const numberOfPayments = years * 12

const monthlyPayment = Math.round(
  (loanAmount *
    monthlyRate *
    Math.pow(1 + monthlyRate, numberOfPayments)) /
    (Math.pow(1 + monthlyRate, numberOfPayments) - 1)
)


  return (
    <>
      <header className="header">
        <div className="logo">MortgagePro</div>

        <nav>
          <a href="#services">שירותים</a>
          <a href="#process">תהליך</a>
          <a href="#faq">שאלות</a>
          <a href="#contact">צור קשר</a>
        </nav>
      </header>

      <section className="hero">
        <div className="hero-content">
          <span className="badge">ייעוץ משכנתאות אישי ומקצועי</span>

          <h1>משכנתא חכמה מתחילה בהחלטה נכונה</h1>

          <p>ליווי אישי בתהליך המשכנתא, השוואת הצעות בנקים, מחזור משכנתא ובניית תמהיל מותאם לצרכים שלכם.</p>

          <div className="hero-actions">
            <a className="btn primary" href="https://wa.me/972545909764">
              שיחת ייעוץ בוואטסאפ
            </a>

            <a className="btn secondary" href="mailto:dorazar01@gmail.com">
              שליחת מייל
            </a>
          </div>
        </div>

        <div className="hero-card">
  <h3>מחשבון משכנתא</h3>

  <div className="calculator-group">
    <span className="calculator-label">
      גובה משכנתא
    </span>

    <div className="calculator-row">
      <input
        type="range"
        min="100000"
        max="3000000"
        step="10000"
        value={loanAmount}
        onChange={(e) => setLoanAmount(+e.target.value)}
      />

      <div className="value-box">
        {loanAmount.toLocaleString()} ₪
      </div>
    </div>
  </div>

  <div className="calculator-group">
    <span className="calculator-label">
      ריבית שנתית
    </span>

    <div className="calculator-row">
      <input
        type="range"
        min="1"
        max="10"
        step="0.1"
        value={interestRate}
        onChange={(e) => setInterestRate(+e.target.value)}
      />

      <div className="value-box">
        {interestRate}%
      </div>
    </div>
  </div>

  <div className="calculator-group">
    <span className="calculator-label">
      תקופת המשכנתא
    </span>

    <div className="calculator-row">
      <input
        type="range"
        min="5"
        max="35"
        step="1"
        value={years}
        onChange={(e) => setYears(+e.target.value)}
      />

      <div className="value-box">
        {years} שנים
      </div>
    </div>
  </div>

  <div className="result-box">
    <span>החזר חודשי משוער</span>

    <strong>
      {monthlyPayment.toLocaleString()} ₪
    </strong>
  </div>

  <small className="calculator-note">
    * החישוב משוער בלבד ועשוי להשתנות בהתאם
    לתמהיל המשכנתא, ריביות הבנקים ותנאי השוק
    בתקופת לקיחת ההלוואה.
  </small>
</div>

      </section>

      <section className="trust">
        <div>✓ ליווי אישי</div>
        <div>✓ השוואת בנקים</div>
        <div>✓ תמהיל מותאם</div>
        <div>✓ שקיפות מלאה</div>
      </section>

      <section id="services" className="section">
        <h2>השירותים שלנו</h2>

        <div className="cards">
          <div className="card">
            <h3>משכנתא לדירה ראשונה</h3>
            <p>ליווי מלא מהרגע הראשון ועד קבלת האישור מהבנק.</p>
          </div>

          <div className="card">
            <h3>מחזור משכנתא</h3>
            <p>בדיקה האם ניתן לשפר תנאים ולהפחית החזרים או ריביות.</p>
          </div>

          <div className="card">
            <h3>משפרי דיור</h3>
            <p>תכנון נכון של מעבר דירה, מכירה, קנייה ומשכנתא חדשה.</p>
          </div>

          <div className="card">
            <h3>בדיקת כדאיות</h3>
            <p>ניתוח ראשוני של יכולת החזר, הון עצמי ותמהיל אפשרי.</p>
          </div>
        </div>
      </section>

      <section id="process" className="section light">
        <h2>איך זה עובד?</h2>

        <div className="steps">
          <div>
            <span>01</span>
            <h3>שיחת היכרות</h3>
            <p>מבינים את המטרה, התקציב והמצב הפיננסי.</p>
          </div>

          <div>
            <span>02</span>
            <h3>בניית תמהיל</h3>
            <p>מתאימים מסלולים לפי יכולת ההחזר והצרכים שלכם.</p>
          </div>

          <div>
            <span>03</span>
            <h3>השוואת בנקים</h3>
            <p>בודקים הצעות ומנהלים תהליך מול הבנקים.</p>
          </div>

          <div>
            <span>04</span>
            <h3>חתימה וליווי</h3>
            <p>מלווים עד לקבלת המשכנתא בפועל.</p>
          </div>
        </div>
      </section>

      <section className="section mortgage-info">
  <h2>פתרונות משכנתא לכל צורך</h2>

  <div className="info-cards">
    <div className="info-card">
      <div className="info-icon">🏠</div>
      <h3>משכנתא לרכישת דירה</h3>
      <p>
        ליווי בתהליך רכישת דירה, בדיקת יכולת החזר, השוואת בנקים
        ובניית תמהיל שמתאים למשפחה שלכם.
      </p>
      <a href="#contact">לקביעת פגישה ללא עלות</a>
    </div>

    <div className="info-card">
      <div className="info-icon">🔄</div>
      <h3>מחזור משכנתא</h3>
      <p>
        בדיקה האם ניתן לשפר את תנאי המשכנתא הקיימת, להפחית החזר חודשי
        או לחסוך בעלויות לאורך השנים.
      </p>
      <a href="#contact">לקביעת פגישה ללא עלות</a>
    </div>

    <div className="info-card">
      <div className="info-icon">📊</div>
      <h3>הלוואה לכל מטרה</h3>
      <p>
        בדיקת אפשרות לקבלת מימון מול הבנקים וגופים פיננסיים,
        בהתאם לצורך, יכולת ההחזר והנכס הקיים.
      </p>
      <a href="#contact">לקביעת פגישה ללא עלות</a>
    </div>
  </div>
</section>

      <section className="section reviews">
        <h2>לקוחות ממליצים</h2>

        <div className="cards">
          <div className="card">
            <p>"קיבלנו ליווי מקצועי וחסכנו הרבה כסף בתמהיל."</p>
            <strong>⭐⭐⭐⭐⭐</strong>
          </div>

          <div className="card">
            <p>"הסבירו לנו הכל בצורה ברורה והורידו המון לחץ."</p>
            <strong>⭐⭐⭐⭐⭐</strong>
          </div>

          <div className="card">
            <p>"שירות אישי, זמין ומקצועי לאורך כל הדרך."</p>
            <strong>⭐⭐⭐⭐⭐</strong>
          </div>
        </div>
      </section>

      <section id="faq" className="section">
        <h2>שאלות נפוצות</h2>

        <div className="faq">
          <details>
            <summary>האם חייבים יועץ משכנתאות?</summary>
            <p>לא חייבים, אבל יועץ יכול לעזור להבין את האפשרויות ולשפר תנאים מול הבנקים.</p>
          </details>

          <details>
            <summary>מתי כדאי להתחיל תהליך?</summary>
            <p>רצוי עוד לפני חתימה על חוזה, כדי להבין תקציב ויכולת החזר.</p>
          </details>

          <details>
            <summary>מה זה מחזור משכנתא?</summary>
            <p>בדיקה ושינוי של המשכנתא הקיימת במטרה לשפר תנאים או להתאים אותה למצב הנוכחי.</p>
          </details>

          <details>
            <summary>כמה הון עצמי צריך?</summary>
            <p>זה תלוי בסוג העסקה ובסטטוס שלכם מול הבנק. ניתן לבדוק זאת בשיחה ראשונית.</p>
          </details>
        </div>
      </section>

      <section id="contact" className="section contact">
        <h2>השאירו פרטים לייעוץ ראשוני</h2>

        <p>נחזור אליכם בהקדם לבדיקת אפשרויות המשכנתא המתאימות לכם.</p>

        <form className="contact-form" action="https://formsubmit.co/dorazar01@gmail.com" method="POST">
          <input type="text" name="name" placeholder="שם מלא" required />
          <input type="tel" name="phone" placeholder="טלפון" required />
          <input type="email" name="email" placeholder="דואר אלקטרוני" />

          <textarea name="message" placeholder="ספרו לנו בקצרה על הצורך שלכם" rows="5" />

          <input type="hidden" name="_subject" value="פנייה חדשה מאתר יועץ משכנתאות" />

          <button type="submit" className="btn primary">
            שליחת פרטים
          </button>
        </form>

        <div className="contact-buttons">
          <a className="btn secondary" href="https://wa.me/972545909764">
            שליחה בוואטסאפ
          </a>

          <a className="btn secondary" href="mailto:dorazar01@gmail.com">
            שליחת מייל
          </a>
        </div>
      </section>

      <footer className="footer">
        <p>MortgagePro © 2026</p>
        <span>ייעוץ משכנתאות וליווי פיננסי</span>
      </footer>
    </>
  )
}

export default App
