import { Component, OnInit, ViewEncapsulation , ViewChild} from '@angular/core';
import { AdminService } from './admin.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AdminComponent implements OnInit {
  @ViewChild('fileInput') public fileInput;

  constructor(private adminService: AdminService) { }

  ngOnInit() {
  }

  public onSubmit(event: NgForm) {
    const fileBrowser = this.fileInput.nativeElement;
    if (fileBrowser.files && fileBrowser.files[0]) {
      const formData = new FormData();
      formData.append('image', fileBrowser.files[0]);
      this.adminService.uploadData(formData).subscribe((res: any) => {
        // console.log(res);
      }, (error: any) => {
        // console.log(error);
      });
    }

  }
}
