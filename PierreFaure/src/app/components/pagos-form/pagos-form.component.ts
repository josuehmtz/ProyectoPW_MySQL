import { Component, ElementRef, Injectable, OnInit, ViewChild } from '@angular/core';
import { waitForAsync } from '@angular/core/testing';
import { Router } from '@angular/router';

// tslint:disable-next-line: max-line-length
declare var paypal: { buttons: (arg0: { createOrder: (data: any, actions: any) => any;
   onApprove: (data: any, actions: any) => Promise<void>; onError: (err: any) => void; }) =>
    { (): any; new(): any; render: { (arg0: any): void; new(): any; }; }; };
@Injectable()
@Component({
  selector: 'app-pagos-form',
  templateUrl: './pagos-form.component.html',
  styleUrls: ['./pagos-form.component.css']
})
export class PagosFormComponent implements OnInit {

  constructor(private router: Router) { }

  @ViewChild('paypal', { static: true })
  paypalElement!: ElementRef;

  pagos = {
    descripcion: 'Pago Pierre Faure',
    precio: '1500',
  };

  paymentRequest: google.payments.api.PaymentDataRequest = {
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



  ngOnInit(): void {
    paypal.buttons({
      createOrder: (data, actions) => {
        return actions.order.create({
          purchase_units: [{
            description: this.pagos.descripcion,
            amount: {
              currency_code: 'MXM',
              value: this.pagos.precio
            }
          }]
        });
      },
      onApprove: async (data, actions) => {
        const order = await actions.order.capture();
        console.log(order);
      },
      onError: err => {
        console.log(err);
      }
    }).render(this.paypalElement.nativeElement);
  }


  // tslint:disable-next-line: typedef
  cancelar() {
    this.router.navigate(['admin']);
  }

onLoadPaymentData = (
  event: Event): void => {
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

}
