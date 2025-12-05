import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonButton, IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { closeCircleOutline } from 'ionicons/icons';
import { SelectionItem } from 'src/app/models/SelectionItem';

@Component({
  selector: 'app-selection-summary',
  standalone: true,
  imports: [CommonModule, IonIcon],
  template: `
    <div class="selection-container" *ngIf="selections.length > 0">
      <div class="selection-header">
        <h3 class="selection-title">📋 Your Selections</h3>
        <button class="close-btn" (click)="clearAll.emit()">
          <ion-icon name="close-circle-outline"></ion-icon>
        </button>
      </div>

      <div class="selection-chips">
        <div *ngFor="let item of selections" class="chip">
          <img *ngIf="item.image" [src]="item.image" alt="{{ item.value }}" class="chip-image" />
          <span class="chip-label">{{ item.category }}</span>
          <button
            class="chip-close"
            (click)="onRemoveClick(item)"
            title="Remove this selection">
            ✕
          </button>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .selection-container {
      position: fixed;
      top: 56px;
      left: 12px;
      right: 12px;
      width: calc(100% - 24px);
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      border-radius: 12px;
      padding: 16px 16px 16px;
      box-shadow: 0 4px 16px rgba(102, 126, 234, 0.3), inset 0 1px 0 rgba(255,255,255,0.1);
      z-index: 100;
      max-height: 180px;
      overflow-y: auto;
      animation: slideDown 0.3s ease-out;
      backdrop-filter: blur(20px);
    }

    @keyframes slideDown {
      from {
        transform: translateY(-20px);
        opacity: 0;
      }
      to {
        transform: translateY(0);
        opacity: 1;
      }
    }

    .selection-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 12px;
    }

    .selection-title {
      margin: 0;
      color: white;
      font-size: 14px;
      font-weight: 600;
      letter-spacing: 0.5px;
    }

    .close-btn {
      background: none;
      border: none;
      color: white;
      cursor: pointer;
      padding: 0;
      display: flex;
      align-items: center;
      font-size: 20px;
      transition: transform 0.2s;
    }

    .close-btn:hover {
      transform: scale(1.1);
    }

    .selection-chips {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
    }

    .chip {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      background: rgba(255, 255, 255, 0.15);
      backdrop-filter: blur(10px);
      color: white;
      padding: 6px 12px;
      border-radius: 16px;
      font-size: 12px;
      border: 1px solid rgba(255, 255, 255, 0.3);
      animation: popIn 0.3s ease-out;
    }

    .chip-image {
      width: 32px;
      height: 32px;
      border-radius: 8px;
      object-fit: cover;
      border: 1px solid rgba(255, 255, 255, 0.3);
    }

    @keyframes popIn {
      from {
        transform: scale(0.8);
        opacity: 0;
      }
      to {
        transform: scale(1);
        opacity: 1;
      }
    }

    .chip-label {
      font-weight: 500;
    }

    .chip-close {
      background: none;
      border: none;
      color: white;
      cursor: pointer;
      padding: 0;
      font-size: 14px;
      font-weight: bold;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 16px;
      height: 16px;
      border-radius: 50%;
      transition: all 0.2s;
    }

    .chip-close:hover {
      background: rgba(255, 255, 255, 0.2);
      transform: scale(1.1);
    }

    @media (max-width: 480px) {
      .selection-container {
        padding: 12px;
        padding-bottom: 16px;
      }

      .chip {
        font-size: 11px;
        padding: 5px 10px;
      }
    }
  `]
})
export class SelectionSummaryComponent {
  @Input() selections: SelectionItem[] = [];
  @Output() removeSelection = new EventEmitter<SelectionItem>();
  @Output() clearAll = new EventEmitter<void>();

  constructor() {
    addIcons({ closeCircleOutline });
  }

  onRemoveClick(item: SelectionItem) {
    console.log('🗑️ Chip remove button clicked:', item);
    this.removeSelection.emit(item);
  }
}
