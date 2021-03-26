import { Component, OnInit } from '@angular/core';
import { Color } from 'src/app/models/color';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {

  constructor(private colorService: ColorService) { }
  Colors: Color[] = []
  currentColor: Color;
  filterText="";

  ngOnInit(): void {
    this.GetColors();
  }

  GetColors() {
    this.colorService.getColors().subscribe(colors => {
      this.Colors = colors.data;
    })
  }

  setCurrentColor(color: Color) {
    this.currentColor = color
  }

  getCurrentColorClass(color: Color) {
    if (color == this.currentColor) {
      return "list-group-item active"
    } else {
      return "list-group-item";
    }
  }
}