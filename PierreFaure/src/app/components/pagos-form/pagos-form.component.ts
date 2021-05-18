import { Component, ElementRef, Injectable, OnInit, ViewChild } from '@angular/core';
import { async } from '@angular/core/testing';
import { Router } from '@angular/router';

//declare var paypal;
@Injectable()
@Component({
  selector: 'app-pagos-form',
  templateUrl: './pagos-form.component.html',
  styleUrls: ['./pagos-form.component.css']
})
export class PagosFormComponent implements OnInit {

  //@ViewChild('paypal', {static:true}) paypalElement:ElementRef;

  pagos = {
    descripcion: 'Pago Pierre Faure',
    precio: '1500',

  }

  constructor(private router:Router) { }

  ngOnInit(){}

  /*ngOnInit(): void {
    paypal.buttons({
      createOrder:(data,actions) =>{
        return actions.order.create({
          purchase_units:[{
            description: this.pagos.descripcion,
            amount:{
              currency_code: 'MXM',
              value: this.pagos.precio
            }
          }]
        })
      },
      onApprove: async(data,actions)=>{
        const order = await actions.order.capture();
        console.log(order)
      },
      onError: err =>{
        console.log(err);
      }
    }).render(this.paypalElement.nativeElement);
  }
  */

  cancelar() {
    this.router.navigate(['admin']);
  }








  
  /*paymentRequest : google.payments.api.PaymentDataRequest = {
    apiVersion: 2,
    apiVersionMinor: 0,
    allowedPaymentMethods: [
      {
        type: 'CARD',
        parameters: {
          allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
          allowedCardNetworks: ['VISA', 'MASTERCARD', 'AMEX'],
        },
        tokenizationSpecification: {
          type: 'PAYMENT_GATEWAY',
          parameters: {
            gateway: 'example',
            gatewayMerchantId: 'examplegatewayMerchantId',

          },
        },
      },
    ],
  merchantInfo: {
    merchantId: '12345678901234567890',
    merchantName: 'Colegio Pierre Faure',
  },
  transactionInfo: {
    totalPriceStatus: 'FINAL',
    totalPriceLabel: 'Total',
    totalPrice: '1500.00',
    currencyCode:  'MXN',
    countryCode: 'MX'
  },
  callbackIntents:  ['PAYMENT_AUTHORIZATION']
};

onLoadPaymentData = (
  event : Event): void => {
    const eventDetail = event as CustomEvent<google.payments.api.PaymentData>;
    console.log('load payment data', eventDetail.detail);
  }

onPaymentDataAuthorized: google.payments.api.PaymentAuthorizedHandler = (paymentData) => {
  console.log('payment authorized', paymentData);
  return {
    transactionState: 'SUCCESS'
  };
}

onError = (event: ErrorEvent): void => {
  console.error('error', event.error);
}
*/
}
