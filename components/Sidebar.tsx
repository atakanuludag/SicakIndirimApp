import React from 'react';
import { Button } from 'react-bootstrap';

interface IProps { }

const Sidebar = (props: IProps): React.ReactElement => {
    return (
        <React.Fragment>
            <section className="new-hot-deal">
                <Button variant="warning">
                    <img src="fire.svg" className="fire-icon" />
                    Yeni Sıcak Fırsat
                </Button>
            </section>
            <section className="categories box">
                <div className="sidebar-header">Kategoriler</div>
                <div className="sidebar-content">
                    <ul>
                        <li><a href="#" title="Bilgisayar"><span className="icon"><img src="categories/desktop.svg" alt="Bilgisayar" /></span>Bilgisayar</a></li>
                        <li><a href="#" title="Elektronik"><span className="icon"><img src="categories/electronic.svg" alt="Elektronik" /></span>Elektronik</a></li>
                        <li><a href="#" title="Bilgisayar"><span className="icon"><img src="categories/desktop.svg" alt="Bilgisayar" /></span>Bilgisayar</a></li>
                        <li><a href="#" title="Elektronik"><span className="icon"><img src="categories/electronic.svg" alt="Elektronik" /></span>Elektronik</a></li>
                        <li><a href="#" title="Bilgisayar"><span className="icon"><img src="categories/desktop.svg" alt="Bilgisayar" /></span>Bilgisayar</a></li>
                        <li><a href="#" title="Elektronik"><span className="icon"><img src="categories/electronic.svg" alt="Elektronik" /></span>Elektronik</a></li>
                        <li><a href="#" title="Bilgisayar"><span className="icon"><img src="categories/desktop.svg" alt="Bilgisayar" /></span>Bilgisayar</a></li>
                        <li><a href="#" title="Elektronik"><span className="icon"><img src="categories/electronic.svg" alt="Elektronik" /></span>Elektronik</a></li>
                        <li><a href="#" title="Bilgisayar"><span className="icon"><img src="categories/desktop.svg" alt="Bilgisayar" /></span>Bilgisayar</a></li>
                        <li><a href="#" title="Elektronik"><span className="icon"><img src="categories/electronic.svg" alt="Elektronik" /></span>Elektronik</a></li>
                    </ul>
                </div>
                
            </section>
        </React.Fragment>
    );
}
export default Sidebar;