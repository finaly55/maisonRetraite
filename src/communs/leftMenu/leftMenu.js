import React, {Component} from 'react'
import './leftMenu.scss';

class LeftMenu extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="home">
                <mat-menu>
                    <ng-template matMenuContent>
                        <button mat-menu-item>Settings</button>
                        <button mat-menu-item>Help</button>
                    </ng-template>
                </mat-menu>
            </div>
        )
    }
}

export default LeftMenu;