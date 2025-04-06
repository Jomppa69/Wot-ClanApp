import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ItemService } from '../../services/item.service';

@Component({
  selector: 'app-item-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './item-list.component.html',
  styleUrl: './item-list.component.css'
})
export class ItemListComponent {
  items: string[] = [];
  showItems = false;

  constructor(private itemService: ItemService) {}

  ngOnInit(): void {
    this.fetchItems();
  }

  fetchItems() {
    this.itemService.getItems().subscribe({
      next: (data) => (this.items = data),
      error: (err) => console.error('Error fetching items: ', err)
    })
  }

  clickHandler() {
    this.showItems = !this.showItems;
    }
}
