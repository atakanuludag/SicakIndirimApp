import { NextPage } from 'next';
import HomeLayout from '../layouts/HomeLayout';
import FullLayout from '../layouts/FullLayout';
import BoxLayout from '../layouts/BoxLayout';

type PageWithHomeLayoutType = NextPage & { layout: typeof HomeLayout }
type PageWithFullLayoutType = NextPage & { layout: typeof FullLayout }
type PageWithBoxLayoutType = NextPage & { layout: typeof BoxLayout }

type PageWithLayoutType = PageWithHomeLayoutType | PageWithFullLayoutType | PageWithBoxLayoutType;

export default PageWithLayoutType;