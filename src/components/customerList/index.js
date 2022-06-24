import React, { useState, useEffect } from "react";
import ReactPaginate from 'react-paginate';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCardContent,
  IonItem,
  IonIcon,
  IonLabel,
  IonButton,
} from "@ionic/react";
import "./index.scss";
import { NavLink } from "react-router-dom";
export default function CustomerList(props) {
  const [ viewFilter, setviewFilter ] = useState('card')
  return (
    <div className="customers-container">
      {props.currentItems &&
        props.currentItems.map((item) => (
          <ion-card href={`/customers/${item.id}/details`} color="light">
            {(item.gender === 'male') ? (
              <img src="data:image/png;base64,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" />
            ) : (
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMSRpS_kl4vjdDCCqtUFmJv0NKKelOUvn1Bg&usqp=CAU" />
            )}
            <div className="customer-info">
              <ion-card-header>
                <ion-card-title>{item.firstName} {item.lastName}</ion-card-title>
              </ion-card-header>
              <ion-card-content>{item.city}</ion-card-content>
              <a href="#">View Orders</a>
            </div>
          </ion-card>
        )
        )
      }
    </div>
  );
}
export function PaginatedItems( props) {
  // We start with an empty list of items.
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);
  const items = props.customers;
  console.log('ne`', items)
  useEffect(() => {
    // Fetch items from another resources.
    const endOffset = itemOffset + props.itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    setCurrentItems(items.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(items.length / props.itemsPerPage));
  }, [itemOffset, props.itemsPerPage]);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * props.itemsPerPage) % items.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <>
      <CustomerList currentItems={currentItems} />
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
      />
    </>
  );
}

// function Customer(props) {
//   return (
//     <div>
//       {props.news.map((news, i) => {
//         return (
//           <ion-card href={news.url} color="light">
//             <img src={news.urlToImage} />
//             <div className="news-content">
//               <ion-card-header>
//                 <ion-card-subtitle>{news.source?.name}</ion-card-subtitle>
//                 <ion-card-title>{news.title}</ion-card-title>
//               </ion-card-header>
//               <ion-card-content>{news.description}</ion-card-content>
//               <ion-card-content value={news.content}></ion-card-content>
//             </div>
//           </ion-card>
//         );
//       })}
//     </div>
//   );
// }

