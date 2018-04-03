import { Component ,OnInit} from '@angular/core';
import { CameraService } from '../../services/camera.service';
import {Router, NavigationExtras } from '@angular/router';
import {$WebSocket} from 'angular2-websocket/angular2-websocket';
/*导入滚动*/
import {ElementRef, AfterViewChecked, ViewChild} from "@angular/core";
@Component({
  selector: 'debugLogBox',
  templateUrl: './debugLog.html',
})
export class DebugLogComponent {
  constructor( private userService: CameraService, public router: Router) { }
  ngOnInit() {
    //判断当前浏览器是否支持WebSocket
    if ('WebSocket' in window) {
      /*建立连接*/
      // this.ws = new $WebSocket("ws:" + '//' + "apis.t2.5itianyuan.com" + '/'+ "smarthome-console" + "/websocket");
      // this.sendMsg()
    }
    else { alert('当前浏览器 Not support websocket'); }


  }

  // public ws = new $WebSocket("ws:" + '//' + "apis.t2.5itianyuan.com" + '/'+ "smarthome-console" + "/websocket");
  public ws;
  public connect:boolean;
  public innerHtml='';
  sendMsg() {
    this.connect=true;
    /*监听服务器返回信息*/
    this.ws.onMessage((msg: MessageEvent) => {this.delMessage(msg.data) }, {autoApply: false });
    /*监听打开连接*/
    this.ws.onOpen(function () { console.log('连接成功！') });
    /*监听关闭连接*/
    this.ws.onClose(function () { console.log('关闭连接！');});
    /*监听连接错误*/
    this.ws.onError(function () { console.log("连接发生错误"); });
    /*监听窗口关闭*/

  }
  /*关闭连接*/
  closeWebSocket(){this.connect=false; this.ws.close(); }

  /*重建连接*/
  openWebSocket(){
    this.ws = new $WebSocket("ws:" + '//' + "apis.t2.5itianyuan.com" + '/'+ "smarthome-console" + "/websocket");
    this.connect=true;
    this.sendMsg();
  }

  /*处理服务器返回消息*/
  delMessage(ele){
    var data = ele.split(" - ");
    console.log(data);
    console.log(data[2]);
    var id=data[2];
    this.innerHtml=this.innerHtml+"<div id='" + id + "'>" + "<div>" + data[3] + "</div>" + "<div>" + data[5] + "</div>" + "<div>" + data[4] + "</div>";


  }

  /*清空消息*/
  reset() { this.innerHtml=''; }
  public currentStyles = { 'min-height': (window.screen.height-145)+'px','height': (window.screen.height-145)+'px',overflow:'visible'};
  public currentStyleS = { 'min-height': (window.screen.height-300)+'px','height': (window.screen.height-300)+'px',overflow:'scroll'};

  /*消息滚动*/
  @ViewChild("scrollMe") myScrollContainer;
  ngAfterViewChecked() {
    this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
  }



  public dataList:any=[];

  public dataStart={
    "arriveTime": 1522656757000,
    "process": "start",
    "method": "SENSORCONTROL",
    "inititor": "API-SERVER",
    "params": {
      "cmdId": "1003",
      "apiKey": "a2c80161-4b0e-40e2-8488-9f0028f48d13",
      "cmdArgs": {
        "value": "00"
      },
      "sensorId": "4580"
    },
    "accountId": 1196,
    "sn": "jTLH$9Fb0",
    "deviceSn": "00-0D-6F-00-0B-74-E3-C2"
  };

  public dataEnd={
    "arriveTime": 1522656757000,
    "process": "end",
    "method": "SENSORCONTROL",
    "inititor": "API-SERVER",
    "params": {
      "code": "200",
      "data": "hcWoYDLi",
      "message": "OK",
      "status": true
    },
    "accountId": 1196,
    "isSucess": true,
    "interfaceResp": 28,
    "retryCount": 1,
    "sn": "jTLH$9Fb0",
    "deviceSn": "00-0D-6F-00-0B-74-E3-C2"
  }







}
