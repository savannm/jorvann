
import './Layout.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; {new Date().getFullYear()} Sav Mao. All rights reserved.</p>
        <p style={{marginTop: '0.5rem'}}>Digital Specialist spanning across multiple sectors.</p>
      </div>
    </footer>
  );
}
