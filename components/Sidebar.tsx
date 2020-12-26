import React from 'react';
import { Button } from 'react-bootstrap';

interface IProps { }

const Sidebar = (props: IProps): React.ReactElement => {
    return (
        <React.Fragment>
            <section className="new-hot-deal">
                <Button variant="primary">Yeni Sıcak Fırsat</Button>
            </section>
            <section className="categories">
                <div className="sidebar-header">Kategoriler</div>
                <ul>
                    <li><a href="#" title="Bilgisayar"><span className="icon"><img src="categories/desktop.svg" alt="Kiwi standing on oval" /></span>Bilgisayar</a></li>
                </ul>
            </section>
        </React.Fragment>
    );
}
export default Sidebar;