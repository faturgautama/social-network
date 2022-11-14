import { Component, OnInit } from '@angular/core';

export interface IBreadcrumb {
    id: string;
    title: string;
}

@Component({
    selector: 'app-breadcrumb',
    templateUrl: './breadcrumb.component.html',
    styleUrls: ['./breadcrumb.component.css']
})
export class BreadcrumbComponent implements OnInit {

    Breadcrumbs: IBreadcrumb[];

    constructor() {
        this.Breadcrumbs = [
            { id: 'videos', title: 'Videos' },
            { id: 'people', title: 'People' },
            { id: 'documents', title: 'Documents' },
            { id: 'communities', title: 'Communities' },
            { id: 'favorites', title: 'Favorites' },
            { id: 'channels', title: 'Channels' },
        ];
    }

    ngOnInit(): void {
    }

}
