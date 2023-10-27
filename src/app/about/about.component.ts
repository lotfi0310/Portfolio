import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  downloadPdf() {
    const link = document.createElement('a');
    link.href = 'assets/cv-lo.pdf'; // Provide the actual path to your PDF file
    link.download = 'cv-lo.pdf'; // Define the name for the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);  }
}
