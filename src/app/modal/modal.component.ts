import {Component, ElementRef, Input, OnDestroy, OnInit} from '@angular/core';
import {ModalService} from "../shared/modal.service";

@Component({
  selector: 'jw-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.less']
})
export class ModalComponent implements OnInit, OnDestroy {
  @Input() id: string;
  private element: any;

  constructor(private modalService: ModalService, private el: ElementRef) {
    this.element = el.nativeElement;
  }

  ngOnInit(): void {
    if (!this.id) {
      console.error('modal must have an id')
      return;
    }
    document.body.appendChild(this.element);
    this.element.addEventListener('click', el => {
      if (el.target.className === 'jw-modal') {
        this.close();
      }
    });
    this.modalService.add(this);
  }

  ngOnDestroy() {
    this.element.style.display = 'block';
    document.body.classList.add('jw-modal-open');
  }

  open(): void{
    this.element.style.display = 'block';
    document.body.classList.add('jw-modal-open');
  }

  close(): void{
    this.element.style.display = 'none';
    document.body.classList.remove('jw-modal-open');
  }
}
