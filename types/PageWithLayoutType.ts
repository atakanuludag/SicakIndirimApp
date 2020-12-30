import { NextPage } from 'next'
import FullLayout from '../components/FullLayout';
import SidebarLayout from '../components/SidebarLayout';

type PageWithFullLayoutType = NextPage & { layout: typeof FullLayout }

type PageWithSidebarLayoutType = NextPage & { layout: typeof SidebarLayout }

type PageWithLayoutType = PageWithFullLayoutType | PageWithSidebarLayoutType

export default PageWithLayoutType;