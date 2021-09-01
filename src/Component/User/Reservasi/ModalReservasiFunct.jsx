import React, { Component, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './Assets/style.css';
import axios from 'axios';
import { throwStatement } from '@babel/types';

  const ModalReservasi = (props) => {
    const { buttonLabel, className } = props;

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    const [startDate, setStartDate] = useState(new Date());

    const handleSubmit = e => {
      e.preventDefault();
      const data = {
        jadwal_donor : this.jadwal_donor
      }
  
      axios.post('user/donor-darah-rs', data).then(
          res => {
              console.log(res);
          }
      ).catch(
          err => {
              console.log(err);
          }
      )
    };
    
    // setStartDate(date)
    return (
      <div>
        <div className="d-grid w-100 mx-auto">
          <button class="btn card-button" type="button" onClick={toggle}>
            Booking Jadwal
          </button>
        </div>
        <Modal isOpen={modal} toggle={toggle} className={className}>
          <ModalBody className="modal-body-reservasi">
            <h3 className="judul-modal">Apakah anda yakin ingin melakukan reservasi?</h3>
            <div className="calendar">
              <p className="pilih-tanggal">Pilih tanggal ✨</p>
              {/* <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} dateFormat="yyyy/MM/dd" minDate={new Date()} showMonthDropdown inline wrapperClassName="datepicker" /> */}
              <input type="date" onChange={(e) => this.jadwal_donor = e.target.value}/>
            </div>
          </ModalBody>
          <div className="d-flex foot-modal">
            <button type="button" className="btn button-batal" onClick={toggle}>
              Batal
            </button>
            <button type="button" className="btn button-lanjutkan" onClick={() => { alert(`Behasil! Anda akan melakukan donor darah pada ${this.jadwal_donor}`); }}>
              Lanjutkan
            </button>
          </div>
        </Modal>
      </div>
    );
  };

export default ModalReservasi;
