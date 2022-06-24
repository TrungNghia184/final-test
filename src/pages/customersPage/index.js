import React, { useEffect, useState } from "react";
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
import { pin, wifi, wine, warning, walk } from "ionicons/icons";
import NavBar from "../../components/navBar";
import CustomerList, { PaginatedItems } from "../../components/customerList";
import DataOfUsers from "../../data/customers.json"
import "./index.scss"
export default function CustomersPage() {
  const [usersData, setUsersData] = useState([1,2,3,4,5,6,7,8,9,10,11,12,13,14]);
  async function getNews() {
    const usersData = DataOfUsers;
    console.log(usersData);
    setUsersData(usersData);
  }
  useEffect(() => {
    getNews()
  }, []);
  return (
    <ion-app>
      <ion-header translucent>
        <ion-toolbar>
          <NavBar />
        </ion-toolbar>{" "}
      </ion-header>
      <ion-content fullscreen>
        <CustomerList customers={usersData}/>
        <PaginatedItems customers={usersData} itemsPerPage={10}/>
      </ion-content>
    </ion-app>
  );
}
