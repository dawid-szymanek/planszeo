import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {product_list} from './product_list.js';
import boardnews from './boardnews.png';
import ontable from './ontable.png';
import planszeo from './planszeo.png';
import planszeo_logo from './planszeo_logo.svg';
import product_photo from './product_photo.png';
import premiera from './premiera.png';
import dodruk from './dodruk.png';
import day_img from './day.svg';
import month_img from './month.svg';

class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: product_list
    };
  }
  render() {
    return(
      <>
        <Menu/>
        <SideMenu/>
        <a id="scroll_up" onClick={()=>{document.documentElement.scrollTop = 0}}>^</a>
        <Main products={this.state.products} year={this.state.year}/>
        <div id="bottom_text"><br/><br/>
          Najlepsze gry planszowe, Wsiąść do Pociągu, Catan, Osadnicy z Catanu, najlepsze planszówki, Carcassonne gra, gry planszowe dla 2 osób, gry planszowe sklep, Splendor, Arnak, Everdell, tanie planszówki, gry na imprezę, Brass: Birmingham, Root, Tajniacy, 5 sekund, Pociągi gra planszowa, top gier planszowych, gry planszowe na prezent, Gloomhaven, Monopoly, Terraformacja Marsa, Scrabble cena, Azul, ranking gier planszowych, gry planszowe na imprezę, gry planszowe dla dzieci, top lista, aktualności gier planszowych, zapowiedzi gier, przedsprzedaże planszówek, kalendarz premier, Wiedźmin.
        </div><br/><br/><br/>
        <Footer/>
      </>
    );
  }
}

function Menu() {
  return(
    <>
      <div id="menu1">
        <table>
        <tbody>
          <tr>
            <td id="search_bar">
              <a href="https://planszeo.pl"><img src={planszeo_logo} alt="logo"/></a>
              <input type="search" name="q" placeholder="Wpisz tytuł gry"/>
            </td>
            <td id="empty_space"></td>
            <td id="expandable_menu">
              <a href="https://planszeo.pl/szukaj"><i className="fa-solid fa-magnifying-glass"></i></a>
              <button>NOWOŚCI</button>
              <button>RANKINGI</button>
              <button>O PLANSZEO</button>
              <button>WSPÓŁPRACA</button>&nbsp;&nbsp;
              <a href="https://planszeo.pl/blog">BLOG</a>
              <button><i className="fa-solid fa-user"></i></button>
            </td>
          </tr>
        </tbody>
        </table>
      </div>
      <div id="menu2"><a href="https://planszeo.pl/aplikacja-mobilna">APLIKACJA MOBILNA Planszeo</a></div>
      <div id="menu3"><a href="https://planszeo.pl/kalendarz-premier-i-dodrukow">KALENDARZ premier i dodruków</a></div>
    </>
  );
}

function SideMenu(props) {
  return(
    <div id="side">
      <img src={boardnews} alt="Board News" width="50px" height="50px"/><br/>
      <img src={ontable} alt="On Table" width="50px" height="50px" /><br/>
      <img src={planszeo} alt="planszeo" width="65px" height="50px"/><br/>

      <button className="side_year">2021</button><br/>
      <button className="side_year">2022</button><br/>

      <a href="#1"><button className="side_month">styczeń</button></a><br/>
      <a href="#2"><button className="side_month">luty</button></a><br/>
      <a href="#3"><button className="side_month">marzec</button></a><br/>
      <a href="#4"><button className="side_month">kwiecień</button></a><br/>
      <a href="#5"><button className="side_month">maj</button></a><br/>
      <a href="#6"><button className="side_month">czerwiec</button></a><br/>
      <a href="#7"><button className="side_month">lipiec</button></a><br/>
      <a href="#8"><button className="side_month">sierpień</button></a><br/>
      <a href="#9"><button className="side_month">wrzesień</button></a><br/>
      <a href="#10"><button className="side_month">październik</button></a><br/>
      <a href="#11"><button className="side_month">listopad</button></a><br/>
      <a href="#12"><button className="side_month">grudzień</button></a><br/>

    </div>
  );
}

function Main(props) {
  return(
    <div id="main">
      <h1>Kalendarz premier i dodruków. Tworzony przez:</h1>
      <img src={boardnews} alt="Board News" width="80px" height="80px"/>
      <img src={ontable} alt="On Table" width="80px" height="80px" id="mid"/>
      <img src={planszeo} alt="planszeo" width="130px" height="80px"/>
      <MonthSelect/><br/>
      <ProductList products={props.products} year={props.year}/><br/>
      <MonthSelect/><br/>
    </div>
  );
}

function MonthSelect() {
  return(
    <table>
      <tbody>
        <tr>
          <td><button className="main_year">2021</button></td>
          <td><button className="main_year">2022</button></td>
        </tr>
        <tr>
          <td><a href="#1"><button className="main_month">styczeń</button></a></td>
          <td><a href="#2"><button className="main_month">luty</button></a></td>
          <td><a href="#3"><button className="main_month">marzec</button></a></td>
          <td><a href="#4"><button className="main_month">kwiecień</button></a></td>
          <td><a href="#5"><button className="main_month">maj</button></a></td>
          <td><a href="#6"><button className="main_month">czerwiec</button></a></td>
          <td><a href="#7"><button className="main_month">lipiec</button></a></td>
          <td><a href="#8"><button className="main_month">sierpień</button></a></td>
          <td><a href="#9"><button className="main_month">wrzesień</button></a></td>
          <td><a href="#10"><button className="main_month">październik</button></a></td>
          <td><a href="#11"><button className="main_month">listopad</button></a></td>
          <td><a href="#12"><button className="main_month">grudzień</button></a></td>
        </tr>
      </tbody>
    </table>
  );
}


function ProductList(props) {
  let list = props.products;
  let list2021 = list.filter(product=>{return product.year==2021});
  let list2022 = list.filter(product=>{return product.year==2022});
  if(props.year==2021) {list = list2021;} else {list = list2022;}
  return(
    <div id="product_list">
      <span id="year_text">{list[0].year}</span><img src={month_img}/>
      <Year products={list}/>
    </div>
  );
}

function Year(props) {
  let list = props.products;
  let list2 = [];
  for(let i=0; i<=12; i++) {
    list2[i] = list.filter(product=>{return product.month==i});
  }
  for(let i=0; i<list2.length; i++) {
    if(list2[i].length==0) {
      list2.splice(i, 1);
      i--;
    }
  }
  list = list2.map((element, index)=>
    <Month key={index} products={element} name={element[0].month}/>);
  return(
    <div>
      {list}
    </div>
  );
}

function Month(props) {
  let list = props.products;
  let list2 = [];
  for(let i=0; i<=31; i++) {
    list2[i] = list.filter(product=>{return product.day==i});
  }
  for(let i=0; i<list2.length; i++) {
    if(list2[i].length==0) {
      list2.splice(i, 1);
      i--;
    }
  }
  list = list2.map((element, index)=>
    <Day key={index} products={element}/>);
  return(
    <div id={props.name}>
      {list}
    </div>
  );
}

function Day(props) {
  let list = props.products;
  let amount = 0;
  let temp;
  let day = list[0].day;
  let month = list[0].month;
  let year = list[0].year;
  let date = new Date(year, month-1, day);
  let dayName = date.toLocaleDateString("pl-PL", { weekday: 'long' });
  let dayText = day;
  let monthText = "sty";
  switch(list[0].month) {
    case 1:
      monthText = "sty";
      break;
    case 2:
      monthText = "lut";
      break;
    case 3:
      monthText = "mar";
      break;
    case 4:
      monthText = "kwi";
      break;
    case 5:
      monthText = "maj";
      break;
    case 6:
      monthText = "cze";
      break;
    case 7:
      monthText = "lip";
      break;
    case 8:
      monthText = "sie";
      break;
    case 9:
      monthText = "wrz";
      break;
    case 10:
      monthText = "paź";
      break;
    case 11:
      monthText = "lis";
      break;
    case 12:
      monthText = "gru";
      break;
    default:
      break;
  }
  for(let i=0; i<2; i++) {
    for(let i=0; i<list.length; i++) {
      if(list[i].type=="dodruk" && i!=list.length-1 && i+amount<list.length) {
        amount++;
        temp=list[list.length-amount];
        list[list.length-amount]=list[i];
        list[i]=temp;
      }
    }
  }
  list = list.map((element, index)=>
    <Product key={index} product={element}/>);
  return(
    <div className="day">
      <img src={day_img} alt="Day" className="day_image"/>
      <span className="month_text">{monthText}</span>
      <span className="day_text">{dayText}</span>
      <span className="day_name"><br/>{dayName.substring(0, 3)}</span>
      {list}
    </div>
  );
}

function Product(props) {
  let a;
  if(props.product.type=="premiera") a = <img src={premiera} alt="premiera"/>;
  else a = <img src={dodruk} alt="dodruk"/>;
  return(
    <a href={props.product.link} className="product" target="_blank">
      <br/>{a}<br/>
      <img src={product_photo} alt="product photo" width="150px" height="150px"/><br/>
      <span className="product_name">{props.product.name}</span>
    </a>
  );
}

function Footer() {
  return(
    <div id="footer">
      <span>
        <img src={planszeo_logo} alt="logo" width="200px"/><br/>
        <span>Copyright © Planszeo 2022.<br/>Wszelkie prawa zastrzeżone.</span>
      </span>
      <span id="footer_list">
        <ul className="footer_list">
          <li><a href="#">PRZEDSPRZEDAŻE</a></li>
          <li><a href="#">PLANSZEO POLECA</a></li>
          <li><a href="#">TOP LISTY</a></li>
          <li><a href="#">AKTUALNOŚCI</a></li>
          <li><a href="#">EKIPA</a></li>
          <li><a href="#">O NAS</a></li>
          <li><a href="#">BLOG</a></li>
          <li><a href="#">PARTNERZY</a></li>
        </ul>

        <ul className="footer_list">
          <li><a href="#">DOŁĄCZ DO NAS - SKLEPY</a></li>
          <li><a href="#">DOŁĄCZ DO NAS - RECENZENCI</a></li>
          <li><a href="#">DOŁĄCZ DO NAS - WYDAWCY</a></li>
          <li><a href="#">JAK DZIAŁAJĄ REKOMENDACJE?</a></li>
          <li><a href="#">NEWSLETTER</a></li>
          <li><a href="#">APLIKACJA MOBILNA</a></li>
        </ul>

        <ul className="footer_list">
          <li><a href="#">ZALOGUJ SIĘ</a></li>
          <li><a href="#">ZAREJESTRUJ SIĘ</a></li>
        </ul>

        <ul className="footer_list">
          <li><a href="#">POLITYKA PRYWATNOŚCI</a></li>
          <li><a href="#">REGULAMIN SERWISU</a></li>
          <li><a href="#">WSPARCIE TECHNICZNE</a></li>
        </ul>
      </span>
      <span id="footer_icons">
        <a href="#"><i className="fa-brands fa-facebook-f"></i></a>&nbsp;&nbsp;&nbsp;&nbsp;
        <a href="#"><i className="fa-brands fa-twitter"></i></a>&nbsp;&nbsp;&nbsp;&nbsp;
        <a href="#"><i className="fa-brands fa-instagram"></i></a>
      </span>
    </div>
  );
}

ReactDOM.render(
  <Page />,
  document.getElementById('root')
);

reportWebVitals();
