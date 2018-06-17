import { Component } from '@angular/core';
import { NavController, MenuController, AlertController, LoadingController, Loading, IonicPage, ModalController } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProvidersPage } from '../providers/providers';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  loginForm: FormGroup;
  isReadyToLogin: boolean;
  loading: Loading;
  loginCredentials = { email: '', password: '' };

  constructor(
    private nav: NavController,
    private formBuilder: FormBuilder,
    private alertCtrl: AlertController,
    private loadingCtrl: LoadingController,
    public modalCtrl: ModalController,
    public menu: MenuController) {

    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });

    this.loginForm.valueChanges.subscribe(() => {
      this.isReadyToLogin = this.loginForm.valid;
    });
  }

  public createAccount() {
    this.nav.push(RegisterPage);
  }

  public login() {
    this.showLoading();
    this.nav.setRoot(ProvidersPage);
  }

  showLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...',
      dismissOnPageChange: true
    });
    this.loading.present();
  }

  showError(text) {
    this.loading.dismiss();

    let alert = this.alertCtrl.create({
      title: 'Fail',
      subTitle: text,
      buttons: ['OK']
    });
    alert.present();
  }

  ionViewWillEnter() {
    this.menu.enable(false);
    this.menu.swipeEnable(false);
  }

  ionViewWillLeave() {
    this.menu.enable(true);
    this.menu.swipeEnable(true);
  }


}