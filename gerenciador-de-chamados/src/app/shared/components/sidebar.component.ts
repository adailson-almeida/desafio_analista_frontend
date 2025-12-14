import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { PanelMenuModule } from 'primeng/panelmenu'; // Use PanelMenuModule para standalone
import { ButtonModule } from 'primeng/button';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    standalone: true,
    imports: [PanelMenuModule, ButtonModule]
})
export class SidebarComponent implements OnInit {
    items: MenuItem[] = []; // Inicialize vazio

    ngOnInit() {
        this.items = [
            {
                label: 'Home',
                icon: 'pi pi-warehouse',
                iconStyle: {'color': '#34d399'},
                routerLink: ['/tickets/list']
            },
            {
                label: 'Gerenciador de Chamados',
                icon: 'pi pi-comments',
                iconStyle: {'color': '#34d399'},
                items: [
                    {
                        label: 'Chamados',
                        icon: 'pi pi-list',
                        iconStyle: {'color': '#34d399'},
                        routerLink: ['/tickets/list']
                    },
                    {
                        label: 'Novo Chamado',
                        icon: 'pi pi-plus',
                        iconStyle: {'color': '#34d399'},
                        routerLink: ['/tickets/add']
                    }

                ]
            },
        ];
    }
}