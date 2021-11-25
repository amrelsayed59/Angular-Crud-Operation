import { Component, OnInit } from '@angular/core';
import { ZoomMtg } from '@zoomus/websdk';

ZoomMtg.preLoadWasm();
ZoomMtg.prepareJssdk();

@Component({
  selector: 'app-zoom-chat',
  templateUrl: './zoom-chat.component.html',
  styleUrls: ['./zoom-chat.component.scss']
})
export class ZoomChatComponent implements OnInit {

  public meetConfig: any;
  public signature: any;

  constructor() {
    document.getElementById('zmmtg-root').style.display = 'block';
    this.SetCongf(123)
   }

  SetCongf(val) {

    this.meetConfig = {
      apiKey: 'abc',
      apiSecret: '123',
      meetingNumber: val,
      userName: 'Amr',
      passWord: '',
      leaveUrl: 'https://www.youtube.com/channel/UcyJB6ohsbbwoSEhYa7SEIdA?view_as=subscriber',
      role: 0
    };

    this.signature = ZoomMtg.generateSignature({
      meetingNumber: this.meetConfig.meetingNumber,
      apiKey: this.meetConfig.apiKey,
      apiSecret: this.meetConfig.apiSecret,
      role: this.meetConfig.role,
      success: res => {
        console.log(res.result)
      }
    });

    ZoomMtg.init({
      showMeetingHeader: false,
      disableInvite: true,
      disableCallOut: true,
      disableRecord: true,
      audioPanelAlwaysOpen: true,
      showPureSharingContent: true,
      isSupportAV: true,
      isSupportChat: false,
      isSupportQA: false,
      isSupportCC: false,
      screenShare: true,
      rwcBackup: '',
      videoDrag: true,
      videoHeader: true,
      isLockBottom: false,
      isSupportNonverbal: false,
      leaveUrl: 'https://www.youtube.com/channel/UCyJB60hsbbwoSEhYa7SEIdA?view_as=subscriber',
      success: res => {
        ZoomMtg.join({
          meetingNumber: this.meetConfig.meetingNumber,
          userName: this.meetConfig.userName,
          signature: this.signature,
          apiKey: this.meetConfig.apiKey,
          userEmail: 'email@gmail.com',
          passWord: this.meetConfig.passWord,
          success: res => {
            console.log('join meeting success');
          },
          error: res => {
            console.log('Error', res);
          }
        });
      },
      error: res => {
        console.log('Err', res)
      }
    });


  }

  ngOnInit(): void {
  }

}
