import Pagination from 'react-bootstrap/Pagination';
import './footer.css'



let active = 2;
let items = [];
for (let number = 1; number <= 5; number++) {
  items.push(
    <Pagination.Item key={number} active={number === active}>
      {number}
    </Pagination.Item>,
  );
}

const Footer = () => {
  return (
    <div className="footer-container">
    <Pagination>{items}</Pagination>
    </div>
  )
}

export default Footer




