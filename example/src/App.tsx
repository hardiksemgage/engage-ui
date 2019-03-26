import * as React from 'react';
import SingleDatePickerWrapper from './SingleDatePickerWrapper';
import DateRangePickerWrapper from './DateRangePickerWrapper';
import PickerAutoSuggestExample from './PickerAutoSuggestExample';
import { ISourceData } from '../../src/components/Breadcrumb/Breadcrumb';
import { INavigationData } from '../../src/components/SideNavigation/SideNavigation';

import {
  Alert,
  Banner,
  Badge,
  Button,
  ButtonGroup,
  Card,
  CardHeader,
  CardFooter,
  CardSection,
  CardBody,
  Checkbox,
  Chip,
  ChoiceList,
  ClickableChip,
  Column,
  DisplayText,
  Drawer,
  DrawerContent,
  SideNavigation,
  FlexBox,
  // FormLayout,
  Heading,
  Link,
  List,
  Item,
  DescriptionList,
  Term,
  Description,
  // ListItem,
  Loading,
  Panel,
  Popover,
  Picker,
  Dropdown,
  Select,
  TextField,
  Tooltip,
  ValidatedTextField,
  ValidatedSelectField,
  ValidatedForm,
  Video,
  VideoType,
  Modal,
  // ModalContent,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Caption,
  Spinner,
  Table,
  TableColumnConfig,
  TableNestedData,
  AccordionItemProps,
  Accordion,
  DropdownItemProps,
  TabPanel,
  Tab,
  TreeView,
  TreeSource,
  BreadCrumb,
  ComboBox,
  ComboBoxItemType,
  Grid,
  GridContent,
  GridDescription,
  GridFooter,
  GridHeader,
  GridImage,
  GridTitle,
  GridType,
  Sticky,
  Process,
} from '../../src/components';

interface State {
  appName?: string;
  appDescription: string;
  appCity: string;
  appTextCounter: string;
  appTextCounter1: string;
  columns: object[];
  checkboxState: boolean;
  rows: object[];
  isMenuOpened: boolean;
  popoverActive: boolean;
  popoverActive2: boolean;
  popoverActiveContainer: boolean;
  bulkAction: any;
  filterConfig: any;
  modalOpen: boolean;
  modalOpen2: boolean;
  modalOpen3: boolean;
  drawer: boolean;
  drawerContent: any;
  activeDrawerId: string;
  outterDrawer: boolean;
  innerDrawer: boolean;
  outterDrawerId: string;
  outterDrawerLabel: string;
  innerDrawerId: string;
  activeModalId: string;
  AccordionItemOpen?: number;
  AccordionItemClose?: number;
  anchorEl?: HTMLElement;
  anchorEl2?: HTMLElement;
  activeTabId: string;
  nestedChildData: TableNestedData[];
  gridView: GridType;
  [key: string]: any;
  processComponentState: number;
  processLength: number;
  callChildCallback: boolean;
}

class App extends React.Component<{}, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      modalOpen: false,
      modalOpen2: false,
      modalOpen3: false,
      appName: '',
      appDescription: '',
      appCity: '',
      appCity1: '',
      appTextCounter: '',
      appTextCounter1: '',
      checkboxState: true,
      columns: [
        { key: 'id', name: 'ID' },
        { key: 'title', name: 'Title' },
        { key: 'count', name: 'Count' },
      ],
      rows: [
        { id: 1, title: 'Title 1', count: 1 },
        { id: 2, title: 'Title 2', count: 2 },
        { id: 3, title: 'Title 3', count: 3 },
      ],
      isMenuOpened: false,
      popoverActive: false,
      popoverActive2: false,
      popoverActiveContainer: false,
      bulkAction: {
        selectedRow: [],
      },
      filterConfig: {
        searchKey: '',
        search: false,
        field: 'name',
      },
      drawer: false,
      drawerContent: {
        content1: false,
        content2: true,
      },
      outterDrawer: false,
      innerDrawer: false,
      outterDrawerId: 'dcontent1',
      innerDrawerId: 'innerDrContent',
      activeDrawerId: 'content1',
      activeModalId: 'modalcontent1',
      outterDrawerLabel: '',
      AccordionItemOpen: undefined,
      AccordionItemClose: undefined,
      activeTabId: 'tab3',
      nestedChildData: [],
      gridView: 'block',
      processComponentState: 0,
      processLength: 2,
      callChildCallback: false,
    };

    this.popovertoggle = this.popovertoggle.bind(this);
    this.popoverToggleContainer = this.popoverToggleContainer.bind(this);
    this.toggleAccordionOpen = this.toggleAccordionOpen.bind(this);
    this.toggleAccordionClose = this.toggleAccordionClose.bind(this);
    this.popoverUpdate = this.popoverUpdate.bind(this);
    this.popoverUpdateContainer = this.popoverUpdateContainer.bind(this);
    this.closed1 = this.closed1.bind(this);
  }

  rowGetter = (index: number) => this.state.rows[index];

  chipClick = () => {
    console.log('chip clicked...');
  }

  chipRemove = () => {
    console.log('chip removed...');
  }

  processNext = () => {
    if (this.state.processComponentState < this.state.processLength - 1) {
      this.setState({ processComponentState: this.state.processComponentState + 1 });
    }
  }

  processPrevious = () => {
    if (this.state.processComponentState > 0 && this.state.processComponentState < this.state.processLength + 1) {
      this.setState({ processComponentState: this.state.processComponentState - 1 });
    }
  }

  updateProcessState(processLength: number, processComponentState: number,) {
    this.setState({ processLength, processComponentState });
  }

  updateProcessStateonClick(processComponentState: number,) {
    this.setState({ processComponentState });
  }

  toggleModal = () => {
    this.setState({ modalOpen: !this.state.modalOpen });
  }

  toggleModal2 = () => {
    this.setState({ modalOpen2: !this.state.modalOpen2 });
  }

  toggleModal3 = () => {
    this.setState({ modalOpen3: !this.state.modalOpen3 });
  }

  onModalOpen = () => {
    console.log('Modal open');
  }

  onModalClose = () => {
    console.log('Modal close');
  }

  onDrawerOpen = () => {
    console.log('drawer open');
  }

  onInnerDrawerOpen = () => {
    this.setState({ outterDrawerLabel: 'Contact' });
  }

  onInnerDrawerClose = () => {
    this.setState({ outterDrawerLabel: '' });
  }

  onDrawerClose = () => {
    console.log('drawer close');
  }

  toggleDrawer = (drawerKey: string) => {
    this.setState({ [drawerKey]: !this.state.drawer });
  }

  toggleDrawerOuter = (drawerKey: string) => {
    this.setState({ [drawerKey]: !this.state.outterDrawer });
  }

  toggleDrawerInner = (drawerKey: string) => {
    this.setState({ [drawerKey]: !this.state.innerDrawer });
  }


  BreadcrumbClick = () => {
    console.log('Breadcrumb clicked...');
  }

  // toggleStatus if true that means row is open else its not
  nestedChildCallback = (rowId: number, toggleStatus: boolean) => {
    const { nestedChildData } = this.state;
    const childtableData = [
      {
        id: 11 + rowId,
        name: `Dheir${rowId}`,
        description: 'Test description',
        status: { itemID: 1, itemName: 'New' },
        type: 'admin',
      }, {
        id: 13 + rowId,
        name: `DheePat${rowId}`,
        description: 'Test description3',
        status: { itemID: 3, itemName: 'Draft' },
        type: 'admin',
      }
    ];

    const childrowActionConfig = [
      {
        content: 'View',
        onClick: (value: any) => { console.log('View:', value); },
      }, {
        content: 'Delete',
        onClick: (value: any) => { console.log('Delete:', value); },
      }, {
        content: 'Archive',
        onClick: (value: any) => { console.log('Archive:', value); },
      }, {
        content: 'Version History',
        onClick: (value: any) => { console.log('Version:', value); },
      },
    ];

    const childcolumnConfig: TableColumnConfig[] = [
      {
        label: 'Name',
        key: 'name',
        className: '',
        sort: true,
      }, {
        label: 'Description',
        key: 'description',
        sort: true,
      }, {
        label: 'Status',
        key: 'status',
        sort: true,
        sortBy: 'itemName',
        injectBody: (value: any) => <Badge status={value.status.itemID === 1 ? 'success' : 'warning'}>{value.status.itemName}</Badge>,
      }, {
        label: 'Type',
        key: 'type',
      },
    ];
    const newData: TableNestedData = {
      rowId,
      component: <Table
      highlight={true}
      sorting="all"
      data={childtableData}
      column={childcolumnConfig}
      selectRow="checkbox"
      selectRowCallback={(val: any) => console.log('nested table callback:', val)}
      rowAction={childrowActionConfig}
      bordered
      renderHeaderCheckbox={false}
    />,

    };

    nestedChildData.some((item: TableNestedData, index: number): boolean => {
      if (item.rowId === rowId) {
        nestedChildData.splice(index, 1);
        return true;
      }

      return false;
    });

    nestedChildData.push(newData);

    this.setState({ nestedChildData, callChildCallback: false });
  }

  render() {
    const Accordionitems : AccordionItemProps[] = [{
      children: <Banner componentTitle={'banner'} status={'success'} />,
      header: <Button>sk</Button>
    }, {
      children: <Banner componentTitle={'banner11'} status={'warning'} />,
      header: <Button>sk1</Button>
    }, {
      children: <Banner componentTitle={'banner13'} status={'warning'} />,
      header: <Button>sk3</Button>
    }];

    const items : DropdownItemProps[] = [
      {
        content: 'Item 1',
        onClick: this.closed1,
      },
      {
        content: 'Item 2',
        divider: false
      },
      {
        content: 'Itemasdadmmm 3',
        disabled: false
      },
      {
        content: 'Item 4',
        header: false
      }
    ];

    const posterUrl = new URL('http://4.bp.blogspot.com/_JSR8IC77Ub4/TKB-XAWXmhI/AAAAAAAABJA/MqOpdFTOaHo/w1200-' +
      'h630-p-k-no-nu/C:%5Cfakepath%5Cbird1.jpg');
    const singleVideoSource = [
      {
        src: 'http://www.sample-videos.com/video/mp4/720/big_buck_bunny_720p_1mb.mp4',
        type: VideoType.MP4,
      }];
    const multiVideoSource = [
      {
        src: 'http://www.sample-videos.com/video/mp4/480/big_buck_bunny_480p_30mb.mp4',
        type: VideoType.MP4,
      },
      {
        src: 'http://www.sample-videos.com/video/mp4/240/big_buck_bunny_240p_30mb.mp4',
        type: VideoType.MP4,
      }];

    const sampleVideoCmp = <Video
      poster={posterUrl}
      src={singleVideoSource}
      autoplay={false}
      controls={false}
      componentStyle={{
        height: 100,
        width: 100,
      }} />;

    const steps = [
      { name: 'Completed', status: 'completed' },
      { name: 'Active', status: 'active' },
      { name: 'Upcoming' }
    ];

    const pickerdata = [
      { key: 1, image: 'http://msaadvertising.com/wp-content/uploads/2014/06/Larry-cartoon-headshot.jpg', name: 'John Doe', description: 'John Doe', email: 'test@gmail.com' },
      { key: 2, image: 'http://cdn.photographyproject.com.au/wp-content/uploads/2013/04/corporate-headshot.jpg', name: 'Pedro Sanchez', description: 'Pedro Sanchez', email: 'pedrosanchez@gmail.com' },
      { key: 3, image: 'https://media.licdn.com/mpr/mpr/p/5/005/08f/04d/02df10d.jpg', name: 'Jane Doe', description: 'Jane Doe', email: 'jane@gmail.com' },
      { key: 4, image: 'http://www.roanokecreditrepair.com/wp-content/uploads/2016/06/Headshot-1.png', name: 'Person McPerson', description: 'Person McPerson', email: 'yahoogmail@gmail.com' },
      { key: 5, image: 'https://d38zhw9ti31loc.cloudfront.net/wp-content/uploads/2013/07/Crystal-headshot-new.jpg', name: 'Laura Person', description: 'Laura Person', email: 'yahooldjadslkjgmail@gmail.com' },
      { key: 6, image: 'https://d38zhw9ti31loc.cloudfront.net/wp-content/uploads/2013/07/Crystal-headshot-new.jpg', name: 'LauraPerson', description: 'Laura Person', email: 'slkjgmail@gmail.com' },
    ];

    const tableData = [
      {
        id: 1,
        name: 'Hiren',
        description: 'Test description',
        status: { itemID: 1, itemName: 'New' },
        type: 'admin',
      }, {
        id: 2,
        name: 'Dheeraj',
        description: 'Test description2',
        status: { itemID: 2, itemName: 'Deleted' },
        type: 'admin',
      }, {
        id: 3,
        name: 'Patel',
        description: 'Test description3',
        status: { itemID: 3, itemName: 'Draft' },
        type: 'admin',
      }, {
        id: 4,
        name: 'Raj',
        description: 'Test description2',
        status: { itemID: 1, itemName: 'New' },
        type: 'admin',
      },
    ];

    const breadcrumbData: ISourceData[] = [
      {
        name: 'Home',
        type: 'default',
        onBreadcrumbClick: () => console.log('Home is clicked')
      }, {
        name: <Badge children={'Home1'} status={'success'} />,
        type: 'active',
        onBreadcrumbClick: () => console.log('Badge is clicked')
      }, {
        name: 'Home2',
        type: 'disabled'
      }, {
        name: 'Home3',
        type: 'active',
        onBreadcrumbClick: () => console.log('Home3 is clicked')
      },
    ];
    const sideNavigationData: INavigationData[] = [
      {
        id: 0.1,
        label: 'Show All Apps',
        icon: 'chevronLeft',
        parentDivider: true,
        action: () => console.log('Basics is clicked!')
      }, {
        id: 0.2,
        label: 'Global Application',
        icon: 'external',
        currentApp: true,
        parentDivider: true,
        action: () => console.log('Basics is clicked!')
      }, {
        id: 0.3,
        label: 'Features',
        icon: 'lightbulb',
        divider: true,
        action: () => console.log('Basics is clicked!')
      }, {
        id: 1,
        label: 'Dashboard',
        icon: 'tachometer',
        action: () => console.log('Basics is clicked!')
      }, {
        id: 2,
        label: 'Basics',
        icon: 'infoCircle',
        divider: true,
        action: () => console.log('Basics is clicked!')
      }, {
        id: 3,
        label: 'Content',
        icon: 'database',
        divider: true,
        action: () => console.log('Basics is clicked!')
      }, {
        id: 3.2,
        label: 'Content Definitions',
        icon: 'database',
        divider: true,
        action: () => console.log('Basics is clicked!')
      }, {
        id: 5.1,
        label: 'Value Definitions',
        icon: 'database',
        divider: true,
        action: () => console.log('Basics is clicked!')
      }, {
        id: 3.1,
        label: 'User',
        icon: 'user',
        action: () => console.log('Basics is clicked!')
      }, {
        id: 4,
        label: 'Groups',
        icon: 'users',
        action: () => console.log('Basics is clicked!')
      }, {
        id: 5,
        label: 'Roles',
        icon: 'userMd',
        action: () => console.log('Basics is clicked!')
      }, {
        id: 6,
        label: 'Permissions',
        icon: 'lock',
        divider: true,
        action: () => console.log('Permissions Item is clicked!'),
      }, {
        id: 7,
        label: 'Pages',
        icon: 'file',
        action: () => console.log('Basics is clicked!')
      }, {
        id: 8,
        label: 'Forms',
        icon: 'checkSquare',
        action: () => console.log('Basics is clicked!')
      }, {
        id: 9,
        label: 'Workflow',
        icon: 'puzzlePiece',
        action: () => console.log('Workflow Item is clicked!'),
      }, {
        id: 10,
        label: 'Themes',
        icon: 'paintBrush',
        divider: true,
        action: () => console.log('Themes Item is clicked!'),
      }, {
        id: 11,
        label: 'Publishing',
        icon: 'refresh',
        divider: true,
        action: () => console.log('Publishing is clicked!'),
      }, {
        id: 12,
        label: 'App Analytics',
        icon: 'chartBar',
        divider: true,
        action: () => console.log('App Analytics is clicked!'),
      }, {
        id: 13,
        label: 'Sherpa',
        icon: 'handsHelping',
        action: () => console.log('Sherpa is clicked!'),
      },
    ];

    /*
      label: Table header lable which will be visible
      key: Match it with json data, this will help to get specific value from the data
      headerValue: In case of custom component, if any value is required, here it can be stored
      classname: any custom classname, this can be used to set width or any other style
      style: same like class but for inline styling
      noSort: if sorting="all" & we want to disable sorting of specifc column
      sort: Enable sorting for specific column
      injectBody: To inject custom component in td
      injectHeader: To inject custom component in th
    */
    const columnConfig: TableColumnConfig[] = [
      {
        label: 'Name',
        key: 'name',
        className: '',
        sort: true,
      }, {
        label: 'Description',
        key: 'description',
      }, {
        label: 'Status',
        key: 'status',
        sort: true,
        sortBy: 'itemName',
        injectBody: (value: any) => <Badge status={value.status.itemID === 1 ? 'success' : 'warning'}>{value.status.itemName}</Badge>,
      }, {
        label: 'Type',
        key: 'type',
      },
    ];

    /* 
      Filtering table data
      mode: Mode of filteration, right now we have only one which is search
      search: If mode is search then it holds search config
        event: When the search should fire, on click or on input
        field: Name of field by which search should happen
        placeholder: Filed placeholder
        title: Title of field
    */

    const rowActionConfig = [
      {
        content: 'View',
        onClick: (value: any) => { console.log('View:', value); },
      }, {
        content: 'Delete',
        onClick: (value: any) => { console.log('Delete:', value); },
      }, {
        content: 'Archive',
        onClick: (value: any) => { console.log('Archive:', value); },
      }, {
        content: 'Version History',
        onClick: (value: any) => { console.log('Version:', value); },
      },
    ];

    const treeSource: TreeSource[] = [
      {
        id: 1,
        component: () => <span>I am component1<br />I am component1<br />I am component1</span>,
        active: true,
        onToggle: status => console.log('Tree node open:', status),
        children: [
          {
            id: 11,
            component: () => <span>I am child component1<br/>I am child component1<br/>I am child component1<br/>
            I am child component1<br/>I am child component1<br/>I am child component1<br/>I am child component1
            </span>,
            active: false,
          },
          {
            id: 12,
            component: () => <span>I am child component2<br />I am child component2<br />I am child component2</span>,
            active: false,
            children: [
              {
                id: 121,
                component: () => <Card>
                <p>Batman is a fictional superhero who appears in American comic books published by DC Comics. The character was created by artist Bob Kane and writer Bill Finger, and first appeared in Detective Comics #27</p>
              </Card>,
              // component: () => <span>I am child child component1</span>,
                active: false,
                children: [
                  {
                    id: 1211,
                    component: () => <Card>
                <p>The American robin (Turdus migratorius) is a migratory songbird of the true thrush genus and Turdidae, the wider thrush family.</p>
              </Card>,
                    // component: () => <span>child component1</span>,
                    active: false,
                  },
                  {
                    id: 1212,
                    component: () => <span>child component2</span>,
                    active: false,
                    children: [
                      {
                        id: 12121,
                        component: () => <span>child component1</span>,
                        active: false,
                      },
                      {
                        id: 12122,
                        component: () => <span>child component2</span>,
                        active: false,
                      },
                    ]
                  },
                ]
              },
              {
                id: 122,
                component: () => <span>I am child component2</span>,
                active: false,
              }
            ]
          },
          {
            id: 13,
            label: 'This is normal component',
            active: false,
          },
          {
            id: 14,
            component: () => <span>I am child component1<br/>I am child component1<br/>I am child component1<br/>
            I am child component1<br/>I am child component1<br/>I am child component1<br/>I am child component1
            </span>,
            active: false,
          }
        ]
      }
      // , {
      //   id: 2,
      //   component: () => <span>I am component2</span>,
      //   active: false,
      //   onToggle: status => console.log('Tree node open:', status),
      // }
    ];

    return (
      <div>
        <span>Small change for test Change 3</span>
        <Badge children={'Badge'} />
        <Badge children={'Badge'} status={'success'} />
        <Badge children={'Badge'} status={'info'} />
        <Badge children={'Badge'} status={'attention'} />
        <Badge children={'Badge'} status={'warning'} />
        <Badge children={'Badge'} progress={'incomplete'} />
        <Badge children={'Badge'} progress={'partiallyComplete'} />
        <Badge children={'Badge'} progress={'complete'} />
        <div>
        </div>
        <div>
          <TabPanel defaultTabId="tab1" position={'top'} alignment={'center'}>
            <Tab tabDescription={<Badge children={'Home'} status={'success'} />} tabId={'tab1'}>
              <p>content 0</p>
            </Tab>
            <Tab tabDescription="User" tabId={'tab2'}>
              <div>
              </div>
            </Tab>
            <Tab tabDescription="User1" tabId={'tab3'}>
              <p>content user1</p>
            </Tab>
            <Tab tabDescription="User2" tabId={'tab4'}>
              <p>content user2</p>
            </Tab>
            <Tab tabDescription="User3" tabId={'tab5'}>
              <p>content user3</p>
            </Tab>
          </TabPanel>
          <Button onClick={() => this.setState({ activeTabId: 'tab2' })}>Trigger User from here</Button>
        </div>
        <div>
        <Button onClick={this.toggleModal}>Medium button</Button>
          <Modal
            active={this.state.modalOpen}
            toggle={this.toggleModal}
            onOpen={this.onModalOpen}
            onClose={this.onModalClose}
            componentWidth="medium"
            closeOnBackgroud
            closeOnEsc
            closeButton>
            <ModalHeader>Modal title</ModalHeader>
            <ModalBody modalOverflow>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae ex pellentesque, pretium lorem vel, tempor ipsum. Phasellus suscipit lacus in velit malesuada, at bibendum mi gravida. Sed cursus nisi sem, non pellentesque ligula euismod eget. Sed quis fringilla nibh, at vestibulum turpis. Donec sed sagittis sapien. Nam quis ex quis nulla porta molestie. Vestibulum eu lorem porta, facilisis orci a, tempor quam. Suspendisse et sollicitudin nulla. Aenean consectetur imperdiet leo nec condimentum. Aliquam scelerisque magna ut tortor accumsan condimentum.

              Nulla quis ante sit amet leo lobortis rhoncus. Cras mollis quis leo nec tincidunt. Aliquam blandit est vitae leo ultrices, ut egestas sapien pharetra. Suspendisse nec aliquet orci. Suspendisse rutrum odio sed neque scelerisque, ut consectetur erat tincidunt. Duis ultrices metus eget ante posuere eleifend. Ut luctus felis neque, sit amet efficitur neque maximus id. Aliquam porta, tellus ut pellentesque facilisis, odio neque maximus erat, venenatis semper nisi metus id augue. Cras vel sem eu elit blandit laoreet id vitae tortor. Morbi sit amet mi rutrum, sagittis enim lacinia, dictum turpis.
      <div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div>Sandwich: Keep Scrolling!</div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div>You can scroll and see me!</div>
      <div>Top Content!</div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div>Sandwich: Keep Scrolling!</div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div>You can scroll and see me!</div>
      <div>Top Content!</div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div>Sandwich: Keep Scrolling!</div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Sticky position={'bottom'}>
                <span>footer content</span>
      </Sticky>
      You can scroll and see me!</div>
            </ModalBody>
            <ModalFooter>
            </ModalFooter>
          </Modal>
          <Caption componentStyle={{ color: 'red' }}>This is modal</Caption>
        </div>
        { /* this is treeview */ }
        <div style={{ padding: '20px' }}>
          <label>This is treeview </label>

          <TreeView
            source={treeSource}
          />
        </div>
        <br />
        <div>
          <p>This is my Breadcrumbs!!</p>
          <BreadCrumb direction={'left'} source={breadcrumbData} displayStyle="primary" />
       </div>
       <div> This is my process indicator
       <Button onClick={() => this.processNext()}>Next Process</Button>
       <Button onClick={() => this.processPrevious()}>Previous Process</Button>
         <Process
          steps={steps}
          allowBackStepping
          onClick={(processComponentState: number) => this.updateProcessStateonClick(processComponentState)}
          onComponentStateUpdate={(currentState: number, processComponentState: number) => this.updateProcessState(currentState, processComponentState) }
          processComponentState = {this.state.processComponentState} />
         </div>
        <br />
        <Caption componentStyle={{ color: 'red' }}>This is Caption</Caption>
        <br />
        <Heading>Alert</Heading>
        <Alert>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
        </Alert>
        <Alert componentType="primary" >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
        </Alert>
        <Alert componentType="success">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
        </Alert>
        <Alert componentType="warning">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
        </Alert>
        <Alert componentType="danger">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
        </Alert>
        <Checkbox helpText="this is help" checked={this.state.checkboxState} label={'I am a checkbox'} onChange={(newValue: boolean) => console.log('I am here:', newValue) } />
        <Banner componentTitle={'banner'} status={'success'} />
        <Banner componentTitle={'banner'} status={'info'} />
        <Banner componentTitle={'banner'} status={'warning'} />
        <Banner componentTitle={'banner'} status={'critical'} />
        <PickerAutoSuggestExample />
        <SingleDatePickerWrapper />
        <DateRangePickerWrapper />

        <div style={{ marginTop: '20px', marginBottom: '20px' }}>
          <Caption componentStyle={{ color: 'red' }}>This is Table field</Caption>
          <Button>
            {`Delete ${this.state.bulkAction.selectedRow.length ? `(${this.state.bulkAction.selectedRow.length})` : ''}`}
          </Button>

          <div className="fieldGroup">
            <input type="text" value={this.state.filterConfig.searchKey} onChange={(event: any) => this.setState({ filterConfig: { ...this.state.filterConfig, searchKey: event.target.value, search: true } })} />
            <div className="fieldGroupAddon">
              <Button onClick={(val: any) => this.setState({ filterConfig: { ...this.state.filterConfig, search: true } })}>Search</Button>
            </div>

            <Button onClick={() => this.setState({ callChildCallback: true })}>Update child</Button>
          </div>
          <Table
            nestedChildData={this.state.nestedChildData}
            nestedChildCallback={this.nestedChildCallback}
            callChildCallback={this.state.callChildCallback}
            expandingRowId={[1, 2, 3, 4]}
            rowExpandOnLoad={false}
            hideExpandedIcon={false}
            data={tableData}
            column={columnConfig}
            hideRow={{ status: 'Deleted' }}
            filterData={this.state.filterConfig}
            defaultSortField="name"
            defaultSortOrder="asc"
            selectRow="checkbox"
            rowAction={rowActionConfig}
            selectCallbackValue="id"
            isChildParentConfigSame
            selectRowCallback={(val: any) => this.setState({ bulkAction: { selectedRow: val } })}
            bordered highlight sorting>
              Loading
            </Table>
        </div>
            <Sticky position={'top'} componentStyle={{ backgroundColor: '#FFF', color: 'inherit' }}>
              <span>footer content</span>
              <Button onClick={this.toggleModal}>Medium buttonas</Button>
            </Sticky>
        <div>
          <Button onClick={() => this.toggleDrawerOuter('outterDrawer')}>Drawer 1</Button>
          <Drawer
            toggleDrawer={() => this.toggleDrawerOuter('outterDrawer')}
            active={this.state.outterDrawer}
            activeContentId={this.state.outterDrawerId}
            mode="slide"
            componentWidth="530px"
            componentLabel={this.state.outterDrawerLabel}
            overlay
            closeButton
            flip>
            <DrawerContent componentId="dcontent1" mode="slide">
              <Button onClick={() => this.toggleDrawerInner('innerDrawer')}>Inner Drawer</Button>
              <Drawer
                toggleDrawer={() => this.toggleDrawerInner('innerDrawer')}
                active={this.state.innerDrawer}
                activeContentId={this.state.innerDrawerId}
                mode="slide"
                componentWidth="large"
                onOpen={this.onInnerDrawerOpen}
                overlay
                closeButton
                flip>
                  <DrawerContent componentId="innerDrContent" mode="slide">
                    I am inner
                  </DrawerContent>
              </Drawer>
            </DrawerContent>
          </Drawer>

          <Button onClick={() => this.toggleDrawer('drawer')}>Drawer open</Button>
          <Drawer
            toggleDrawer={() => this.toggleDrawer('drawer')}
            active={this.state.drawer}
            activeContentId={this.state.activeDrawerId}
            onOpen={this.onDrawerOpen}
            onClose={this.onDrawerClose}
            mode="push"
            componentWidth="large"
            overlay
            closeButton>
            <Sticky position={'top'}>
              <span>Header content</span>
            </Sticky>
            <DrawerContent componentId="content1" mode="slide">
              <p>Reveal Test</p>
              <ul>
                <li>Link 1</li>
                <li>Link 2</li>
                <li>Link 3</li>
                <li>Link 4</li>
                <li>Link 5</li>
              </ul>

              <Button onClick={() => this.setState({ activeDrawerId: 'content2' })}>Content2 open</Button>
              <div>Top Content!
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <div>Sandwich: Keep Scrolling!</div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <div>You can scroll and see me!</div>
            <div>Top Content!</div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <div>Sandwich: Keep Scrolling!</div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <div>You can scroll and see me!</div>
            <div>Top Content!</div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <div>Sandwich: Keep Scrolling!</div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            You can scroll and see me!</div>
            <Sticky position={'bottom'}>
            <span>footer content</span>
            </Sticky>
            </DrawerContent>

            <DrawerContent componentId="content2" mode="slide">
              I am inside drawer content 2

              <Button onClick={() => this.setState({ activeDrawerId: 'content1' })}>Content1 open</Button>
              <Button onClick={() => this.setState({ drawer: false })}>Close</Button>

            </DrawerContent>
          </Drawer>

        </div>

        <p> Some text with a
          <Tooltip content="This order has shipping labels.sdfsdfg">
            <Link>Tooltip 1</Link>
          </Tooltip> in it
        </p>
        <Tooltip
          content="This order has shipping."
        >
          <Link>Tooltip 2</Link>
        </Tooltip>
        <div>
          <h1>{this.state.AccordionItemClose}</h1>
          <h1>{this.state.AccordionItemOpen}</h1>
        <Accordion items={Accordionitems} closeIndex={this.state.AccordionItemClose} openIndex={this.state.AccordionItemOpen} />

          <Button onClick={() => this.toggleAccordionOpen(0)}>item1 toggle open</Button>
          <Button onClick={() => this.toggleAccordionOpen(1)}>item2 toggle open</Button>
          <Button onClick={() => this.toggleAccordionOpen(2)}>item3 toggle open</Button>
          <Button onClick={() => this.toggleAccordionOpen(undefined)}>undefined toggle open</Button>

          <Button onClick={() => this.toggleAccordionClose(0)}>item1 toggle close</Button>
          <Button onClick={() => this.toggleAccordionClose(1)}>item2 toggle close</Button>
          <Button onClick={() => this.toggleAccordionClose(2)}>item3 toggle close</Button>
          <Button onClick={() => this.toggleAccordionClose(undefined)}>undefined toggle close</Button>

          <Heading>Popover</Heading>
          <div style={{ marginLeft: '100px' }}>
            <button onClick={(e: any) => this.popoverUpdateContainer(e)}>Click Popover</button>
            <Popover active={this.state.popoverActiveContainer} direction="up" closeOnClickOutside toggle={() => this.popoverUpdateContainer} anchorEl = {this.state.anchorEl} onClose={() => console.log('I am close')} onOpen={() => console.log('I am open')} callbackParent={newState => this.onChildChanged(newState)}>
              I am popover <Button>Hello popover</Button>
            </Popover>
          </div>
          <br/>
          <div style={{ marginLeft: '100px' }}>
            <Button onClick={(e: any) => this.popoverUpdate(e)}>Dropdown active</Button>
            <Dropdown
              active={this.state.popoverActive}
              dropdownItems={items}
              toggle={this.popoverUpdate}
              anchorEl = {this.state.anchorEl}
              direction="up"
            />
          </div>
          <div style={{ marginLeft: '100px' }}>
            <Button onClick={(e: any) => this.popoverUpdate2(e)}>Dro</Button>
            <Dropdown
              active={this.state.popoverActive2}
              dropdownItems={items}
              toggle={this.popoverUpdate2}
              anchorEl = {this.state.anchorEl2}
              direction="down"
              preferredAlignment="right"
            />
          </div>

          <br/>
          <br/>
          <br/>
          <br/>
          <br/>

          <Column small="2-4" medium="2-4" large="2-4">

          <TextField
            componentId="TestName"
            label="Text Counter"
            placeholder="test-placeholder"
            value={this.state.appTextCounter1}
            // value="Value"
            helpText="Helper Text"
            enableTextCounter
            maxLength={101}
            minLength={5}
            onChange={this.valueUpdater('appTextCounter1')}
            // disabled
          />
          <TextField
            componentId="TestName1"
            label="Text Counter"
            placeholder="test-placeholder"
            value={this.state.appTextCounter}
            // value="Value"
            helpText="Helper Text"
            maxLength={101}
            minLength={5}
            multiline
            resizable
            onChange={this.valueUpdater('appTextCounter')}
            disabled
          />
          <Select
            componentId="appCity1"
            name="Select city 2"
            label="Label"
            options={[{ value: '', label: '' },{ value: 'pasadena', label: 'Pasadena' }, { value: 'altadena', label: 'Altadena' }]}
            value={this.state.appCity1}
            // value="Value"
            onChange={this.valueUpdater('appCity1')}
            placeholder="Some stuff"
            helpText="Help Text"
            // disabled
          />
          </Column>

                                <Card>
                                <CardHeader>Online store dashboard - Card</CardHeader>
                                    <CardBody sectioned>
                                        <CardSection>
                                        <CardHeader>Reports</CardHeader>
                                            <p>View a summary of your online store’s performance.</p>
                                        </CardSection>
                                        <CardSection>
                                        <CardHeader>Summary Reports</CardHeader>
                                            <p>View a summary of your online store’s performance, including sales, visitors, top products, and referrals.</p>
                                        </CardSection>
                                    </CardBody>
                                </Card>
                                <div>this is card sep</div>
         <Card>
            <CardHeader>Grid Header1</CardHeader>
            <CardBody>
            <CardSection>This is card Section</CardSection>
            </CardBody>
            <CardFooter><Button onClick={(e: any) => this.popoverUpdate2(e)}>Dropdown2 active</Button></CardFooter>
         </Card>
          <p> Some text with a
          <Tooltip content="Order" preferredPosition="left" active>
              <Link>Tooltipss</Link>
            </Tooltip> in it
        </p>
          <p> Some text with a
          <Tooltip content="This order has" preferredPosition="above">
              <Link>Tooltip 1</Link>
            </Tooltip> in it
        </p>
          <Tooltip
            content="This order has shipping."
          >
            <Link>Tooltip 2</Link>
          </Tooltip>
          <TextField componentId="TestName" label="Text Counter" placeholder="test-placeholder" value={this.state.appTextCounter} helpText="Helper Text" enableTextCounter={true} maxLength={100} /* onChange={this.valueUpdater('appTextCounter')} */ />
          <ClickableChip chip={<Chip>Batman</Chip>}>
            <Card>
              <p>Batman is a fictional superhero who appears in American comic books published by DC Comics. The character was created by artist Bob Kane and writer Bill Finger, and first appeared in Detective Comics #27</p>
            </Card>
          </ClickableChip>
          <Card>
          <CardHeader>More about Batman</CardHeader>
              <p>Batman is a fictional superhero who appears in American comic books published by DC Comics. The character was created by artist Bob Kane and writer Bill Finger, and first appeared in Detective Comics #27</p>
            </Card>
          <p> Some text with a
          <Tooltip content="This order has shipping labels.">
              <Link>Tooltipba 1</Link>
            </Tooltip> in it
        </p>
          <Tooltip
            content="This order has shipping."
          >
            <Link>Tooltip 2</Link>
          </Tooltip>
          <p> Some text with a
          <Tooltip content="This order has shipping labels.">
              <Link>Tooltip 1</Link>
          </Tooltip> in it
        </p>
          <Tooltip
            content="This order has shipping."
          >
            <Link>Tooltip 2</Link>
          </Tooltip>
          <SideNavigation accordian={true} source={sideNavigationData} activeItem={1} drawerOpen hideCollapse={false} drawerExpand ={true}/>
          <Heading>List</Heading>
          <List componentType="bullet">
            <Item>Yellow shirt</Item>
            <Item>Red shirt</Item>
            <List componentType="bullet">
              <Item>Yellow shirt</Item>
              <Item>Red shirt</Item>
              <Item>Green shirt</Item>
              <List componentType="bullet">
                <Item>Yellow shirt</Item>
                <Item>Red shirt</Item>
                <Item>Green shirt</Item>
              </List>
            </List>
            <Item>Yellow shirt</Item>
            <Item>Red shirt</Item>
            <Item>Green shirt</Item>
          </List>
          <List componentType="number">
            <Item>First item</Item>
            <Item>Second item</Item>
            <Item>Third Item</Item>
          </List>
          <Heading>Description List</Heading>
          <DescriptionList componentType="default" componentStyle="Inline">
              <Term>Logistics</Term>
              <Description>The management of products or other resources as they travel between a point of origin and a destination.</Description>
              <Term>Sole proprietorship</Term>
              <Description>A business structure where a single individual both owns and runs the company.</Description>
              <Term>Discount code</Term>
              <Description>A series of numbers and/or letters that an online shopper may enter at checkout to get a discount or special offer.</Description>
          </DescriptionList>
          <DescriptionList componentType="default" componentStyle="Stacked">
            <Term>Logistics</Term>
            <Description>The management of products or other resources as they travel between a point of origin and a destination.</Description>
            <Term>Sole proprietorship</Term>
            <Description>A business structure where a single individual both owns and runs the company.</Description>
            <Term>Discount code</Term>
            <Description>A series of numbers and/or letters that an online shopper may enter at checkout to get a discount or special offer.</Description>
        </DescriptionList>
          <DescriptionList componentType="divider" componentStyle="Stacked">
           <Term>Logistics</Term>
           <Description>The management of products or other resources as they travel between a point of origin and a destination.</Description>
           <Term>Sole proprietorship</Term>
           <Description>A business structure where a single individual both owns and runs the company.</Description>
           <Term>Discount code</Term>
           <Description>A series of numbers and/or letters that an online shopper may enter at checkout to get a discount or special offer.</Description>
       </DescriptionList>

        <Heading>Grid Block</Heading>
        <ButtonGroup segmented={true}>
          <Button onClick={() => this.setState({ gridView: 'block' })}>Block view</Button>
          <Button onClick={() => this.setState({ gridView: 'list' })}>List view</Button>
        </ButtonGroup>
        <br />
        <Grid gridType={this.state.gridView}>
          <GridContent>
            <GridHeader>Grid Header</GridHeader>
            <GridImage>Image</GridImage>
            <GridTitle>Grid Title</GridTitle>
            <GridDescription>Grid Description</GridDescription>
            <GridFooter>Grid Footer</GridFooter>
          </GridContent>

          <GridContent>
            <GridHeader>Grid Header</GridHeader>
            <GridImage>Image</GridImage>
            <GridTitle>Grid Title</GridTitle>
            <GridDescription>Grid Description</GridDescription>
            <GridFooter>Grid Footer</GridFooter>
          </GridContent>

          <GridContent>
            <GridHeader>Grid Header</GridHeader>
            <GridImage>Image</GridImage>
            <GridTitle>Grid Title</GridTitle>
            <GridDescription>Grid Description</GridDescription>
            <GridFooter>Grid Footer</GridFooter>
          </GridContent>

          <GridContent>
            <GridHeader>Grid Header</GridHeader>
            <GridImage>Image</GridImage>
            <GridTitle>Grid Title</GridTitle>
            <GridDescription>Grid Description</GridDescription>
            <GridFooter>Grid Footer</GridFooter>
          </GridContent>

          <GridContent>
            <GridHeader>Grid Header</GridHeader>
            <GridImage>Image</GridImage>
            <GridTitle>Grid Title</GridTitle>
            <GridDescription>Grid Description</GridDescription>
            <GridFooter>Grid Footer</GridFooter>
          </GridContent>
        </Grid>
          <ChoiceList
            componentTitle="Company name"
            choices={[
              {
                label: 'Hidden',
                value: 'hidden',
              },
              {
                label: 'Optional',
                value: 'optional',
              },
              {
                label: 'Required',
                value: 'required',
              },
            ]}
            selected={['hidden']}
          />
          <Loading />
          <Picker
            chipComponent={Chip}
            filterPlaceHolder="!People!!"
            searchResultComponent={Chip}
            source={pickerdata}
            maxSelectedItems={5}
            minSelectedItems={2}
            autoSuggest
            moreInfoComponent={<Button children="ranmal" />}
          />
          <ValidatedForm
            onSubmitError={(value: [any], error: Error) => console.log('value:', value, 'error:', error)}
            onSubmit={(value: [any]) => console.log('Submit Value:', value)}
            formFields={['AppName', 'appDescription', 'appCity']}
          >

            <Heading>App Basics</Heading>

            <DisplayText componentSize="large">This is Display Text, which is used to make a bold visual statement.</DisplayText>
            <p>This is just some fun regular text.</p>

            {/* <FormLayout> */}
              <ValidatedTextField
                componentId="AppName"
                label="App Name"
                placeholder=""
                helpText="We recommend keeping your app name under 23 characters."
                onChange={this.valueUpdater('appName')}
                value={this.state.appName}
                name="App Name"
                validateTrigger={['onBlur']}
                validateRules={[
                  { required: true, message: 'App Name is required.' },
                ]}
              />
              <ValidatedTextField
                multiline
                componentId="appDescription"
                name="App Description"
                value={this.state.appDescription}
                label="App Description"
                placeholder=""
                helpText="Provide an engaging description that highlights the features and functionality of your app. Let potential users know what makes your app unique and why they will love it."
                onChange={this.valueUpdater('appDescription')}
                validateTrigger={['onBlur']}
                validateRules={[
                  { required: true, message: 'App Description is required.' },
                ]}
              />

              <ValidatedSelectField
                componentId="appCity"
                required={true}
                name="Select city"
                label="Select city"
                options={[{ value: '', label: '' }, { value: 'xyz', label: 'xyz' }, { value: 'abc', label: 'abc' }]}
                value={this.state.appCity}
                onChange={this.valueUpdater('appCity')}
                validateTrigger={['onBlur']}
                validateRules={[
                  { required: true, message: 'City is required.' },
                ]}
              />

              <div><p>child<span>child 2</span></p></div>
              <div>
                <FlexBox>
                  <ButtonGroup segmented={true}>
                    <Button primary={true} submit={true}>
                      Save Draft
                    </Button>

                    <Button primary={true}>
                      Publish
                    </Button>
                  </ButtonGroup>

                  <div style={{ marginLeft: '10px' }}>
                    <Button>Cancel</Button>
                  </div>
              </FlexBox>
            </div>

            <div style={{ marginTop: '10px' }}>
              <h5>User Status</h5>

              <Checkbox
                label="Active"
                helpText="Uncheck to disable this users account"
              />
            </div>

            <div style={{ marginTop: '10px' }}>
              <h5>Invite Email</h5>

              <Checkbox
                label="Send an invite email to this user"
              />
            </div>
            {/* </FormLayout> */}
          </ValidatedForm>

          <Heading>Connected Text Field</Heading>
          <Loading />
          <TextField
            label="Connected Text Field"
            type="text"
            placeholder=""
            value={this.state.appTextCounter}
            helpText="Helper Text"
            maxLength={100}
            // onChange={this.valueUpdater('appTextCounter')}
            connectedRight={<Select label="Weight unit" value="" labelHidden options={[
              'kg',
              'lb',
            ]} />}
          />
          <Heading>Flexbox</Heading>
          <FlexBox>
            <div style={{ backgroundColor: 'aqua' }}>Demo 1</div>
            <div style={{ backgroundColor: 'pink' }}>Demo 2</div>
            <div style={{ backgroundColor: 'lime' }}>Demo 3</div>
          </FlexBox>

          <FlexBox direction="Column" align="Stretch" justify="Center">
            <div style={{ backgroundColor: 'aqua' }}>Demo 1</div>
            <div style={{ backgroundColor: 'pink' }}>Demo 2</div>
            <div style={{ backgroundColor: 'lime' }}>Demo 3</div>
          </FlexBox>

          <p> Some text with a
          <Tooltip content="This order has shipping labels.">
              <Link>Tooltip 1</Link>
            </Tooltip> in it
        </p>
          <Tooltip
            content="This order has shipping."
          >
            <Link>Tooltip 2</Link>
          </Tooltip>

          <FlexBox direction="Row" align="Stretch" justify="SpaceAround">
            <div style={{ backgroundColor: 'aqua' }}>Demo 1</div>
            <div style={{ backgroundColor: 'pink' }}>Demo 2</div>
            <div style={{ backgroundColor: 'lime' }}>Demo 3</div>
          </FlexBox>

          <FlexBox inline={true} direction="Column" align="Stretch" justify="Center">
            <div style={{ backgroundColor: 'aqua' }}>Demo 1</div>
            <div style={{ backgroundColor: 'pink' }}>Demo 2</div>
            <div style={{ backgroundColor: 'lime' }}>Demo 3</div>
          </FlexBox>

          <Heading>Chip</Heading>
          <div>
            <Chip>
              Basic Chip
          </Chip>
            <Chip
              image={{
                url: 'example/src/images/netguru-cartoon-characters3.png',
                alt: 'Your mom',
              }}
              removable={true}
              onRemove={this.chipRemove}
            >
              Image Chip
          </Chip>
            <Chip onClick={this.chipClick} clickable={true}>
              Clickable Chip
          </Chip>
            <Chip onRemove={this.chipRemove} removable={true}>
              Removable Chip
          </Chip>
            <Chip transparent>
              Transparent Chip
          </Chip>
          </div>

          <div>
            <h4>Single source video</h4>
            <Video
              poster={posterUrl}
              src={
                [{
                  src: 'http://www.sample-videos.com/video/mp4/720/big_buck_bunny_720p_1mb.mp4',
                  type: VideoType.MP4,
                }]
              }
              autoplay={false}
              controls={true}
              componentStyle={{ height: 400, width: 400 }}
            />
            <h4>Multi source video</h4>
            <Video poster={posterUrl} src={multiVideoSource} autoplay={false} controls={true} componentStyle={{ height: 400, width: 400 }} />
          </div>
          <h4>Panel Component</h4>
          <Panel heading="BASIC PANEL">
            <div>
              Lorem ipsum lorem ipsum
        </div>
          </Panel>
          <Panel heading="BASIC PANEL WITH VIDEO" video={sampleVideoCmp}>
            <div>
              Lorem ipsum lorem ipsum
        </div>
          </Panel>
          <Panel heading={<div>Custom Panel</div>}>
            <div>
              Lorem ipsum lorem ipsum
        </div>
          </Panel>
          <Panel heading={<div>Custom Panel with Video</div>} video={sampleVideoCmp}>
            <div>
              Lorem ipsum lorem ipsum
        </div>
          </Panel>
          <h2>Column Component Demo</h2>
          <div>
            <Column small="1-1">
              <p>Small 1-1!</p>
            </Column>
          </div>
          <p> Some text with a
          <Tooltip content="This order has shipping labels.">
              <Link>Tooltip 1</Link>
            </Tooltip> in it
        </p>
          <Tooltip
            preferredPosition="below"
            content="This order has shipping."
          >
            <Link>Tooltip 2</Link>
          </Tooltip>
          <p> Some text with a
          <Tooltip content="This order has shipping labels.">
              <Link>Tooltip 1</Link>
            </Tooltip> in it
        </p>
          <Tooltip
            preferredPosition="below"
            content="This order has shipping."
          >
            <Link>Tooltip 2</Link>
          </Tooltip>
          <Heading>Grid</Heading>
          <FlexBox>
            <Column small="1-2" medium="1-4" large="3-5">
              <span>Hello small=1-2 medium=1-4 large=3-5</span>
            </Column>
            <Column small="1-2" medium="3-4" large="4-10">
              <span>Hello small=1-2 medium=3-4 large=4-10</span>
            </Column>
          </FlexBox>
        </div>
        <p> Some text with a
        <Tooltip content="This order has shipping labels.">
            <Link>Tooltip 1</Link>
          </Tooltip> in it
      </p>
        <Tooltip
          content="This order has shipping."
        >
          <Link>Tooltip 2</Link>
        </Tooltip>
        <br />
        <p> Some text with a
        <Tooltip content="This order has shipping labels.">
            <Link>Tooltip 1</Link>
          </Tooltip> in it
      </p>
        <Tooltip
          content="This order has shipping."
        >
          <Link>Tooltip 2</Link>
        </Tooltip>
        <br />
        <p> Some text with a
        <Tooltip content="This order has shipping labels.">
            <Link>Tooltip 1</Link>
          </Tooltip> in it
      </p>
        <Tooltip
          content="This order has shipping."
        >
          <Link>Tooltip 2</Link>
        </Tooltip>
        <br />
        <p> Some text with a
        <Tooltip content="This order has shipping labels.">
            <Link>Tooltip 1</Link>
          </Tooltip> in it
      </p>
        <Tooltip
          content="This order has shipping."
        >
          <Link>Tooltip 2</Link>
        </Tooltip>
        <br />
        <p> Some text with a
        <Tooltip content="This order has shipping labels.">
            <Link>Tooltip 1</Link>
          </Tooltip> in it
      </p>
        <Tooltip
          content="This order has shipping."
        >
          <Link>Tooltip 2</Link>
        </Tooltip>
        <br />
        <p> Some text with a
        <Tooltip content="This order has shipping labels.">
            <Link>Tooltip 1</Link>
          </Tooltip> in it
      </p>
        <Tooltip
          content="This order has shipping."
        >
          <Link>Tooltip 2</Link>
        </Tooltip>
        <br />
        <p> Some text with a
        <Tooltip content="This order has shipping labels.">
            <Link>Tooltip 1</Link>
          </Tooltip> in it
      </p>
        <Tooltip
          content="This order has shipping."
        >
          <Link>Tooltip 2</Link>
        </Tooltip>
        <br />
        <p> Some text with a
        <Tooltip content="This order has shipping labels.">
            <Link>Tooltip 1</Link>
          </Tooltip> in it
      </p>
        <Tooltip
          content="This order has shipping."
        >
          <Link>Tooltip 2</Link>
        </Tooltip>
        <br />
        <p> Some text with a
        <Tooltip content="This order has shipping labels.">
            <Link>Tooltip 1</Link>
          </Tooltip> in it
      </p>
        <Tooltip
          content="This order has shipping."
        >
          <Link>Tooltip 2</Link>
        </Tooltip>
        <br />
        <p> Some text with a
        <Tooltip content="This order has shipping labels.">
            <Link>Tooltip 1</Link>
          </Tooltip> in it
      </p>
        <Tooltip
          content="This order has shipping."
        >
          <Link>Tooltip 2</Link>
        </Tooltip>
        <br />
        <Button icon="add" primary>
          Create Role
      </Button>
        <br />
        <Spinner componentColor="inkLightest" componentSize="small" />
        <br />
        <Spinner componentStyle={{ height: '100px' }} />
        <br />
        <ButtonGroup segmented>
          <Button primary>Save Draft</Button>
          <Button primary>Publish</Button>
        </ButtonGroup>
        <br /><br />
        <Button plain>Plain</Button>&nbsp;
        <Button plain disabled>Plain Disabled</Button>&nbsp;
        <Button>Button</Button>&nbsp;
        <Button disabled>Disabled</Button>&nbsp;
        <br /><br />
        <Button primary>Primary</Button>&nbsp;
        <Button primary disabled>Primary Disabled</Button>&nbsp;
        <Button primary outline>Primary Outline</Button>&nbsp;
        <Button outline>Outline</Button>&nbsp;
        <Button outline disabled>Outline Disabled</Button>&nbsp;
        <br /><br />
        <Button destructive>Destructive</Button>&nbsp;
        <Button destructive disabled>Destructive Disabled</Button>&nbsp;
        <Button destructive outline>Destructive Outline</Button>&nbsp;
        <Button destructive outline disabled>Destructive Outline Disabled</Button>&nbsp;
        <br />


        <div>ComboBox</div>
        <ComboBox items={this.getComboBoxItems()} label="Select" currentValue="item1" />
      </div>
    );
  }

  // valueUpdater(field: any) {
  //   return (value: any) => this.setState({ [field]: value });
  // }

  // handleChange(value1: any) {
  //   return (value: any) => this.setState({ [value1]: value });
  // }

  getComboBoxItems() {
    const data = [
      {
        key: 'name',
        type: 'Accordian' as ComboBoxItemType,
        value: [{
          header: 'Item 1',
          children: [{
            name: 'Ankit',
            age: 27
          },
            {
              name: 'Dheeraj',
              age: 27
            }
          ]
        }]
      },
      {
        key: 'name',
        value: [
          {
            name: 'item1'
          },
          {
            name: 'item2'
          }
        ]
      }
    ];
    return data;
  }

  popovertoggle(index: number) {
    const updatedPopoverActive: any = this.state.popoverActive;
    updatedPopoverActive[index] = !updatedPopoverActive[index];

    this.setState({
      popoverActive: updatedPopoverActive
    });
  }

  popoverToggleContainer(index: number) {
    const updatedPopoverActiveContainer: any = this.state.popoverActiveContainer;
    updatedPopoverActiveContainer[index] = !updatedPopoverActiveContainer[index];

    this.setState({
      popoverActiveContainer: updatedPopoverActiveContainer
    });
  }

  toggleAccordionOpen(index?: number) {
    this.setState({
      AccordionItemOpen: index
    });
  }

  toggleAccordionClose(index?: number) {
    this.setState({
      AccordionItemClose: index
    });
  }
  // valueUpdater(field: any) {
  //   return (value: any) => {
  //     this.setState({ [field]: value });
  //   };
  // }

  valueUpdater = (field: string) => {
    return (value: string) => {
      this.setState({ [field]: value });
    };
  }

  handleChange(value: string) {
    return (value: any) => 'this.setState({ [value]: value })';
  }

  popoverUpdate(e: any) {
    this.setState({
      popoverActive : !this.state.popoverActive,
      anchorEl: e ? e.currentTarget as HTMLElement : this.state.anchorEl
    });
  }

  popoverUpdate2(e: any) {
    this.setState({
      popoverActive2 : !this.state.popoverActive2,
      anchorEl2: e ? e.currentTarget as HTMLElement : this.state.anchorEl2
    });
  }

  popoverUpdateContainer(e: any) {
    this.setState({
      popoverActiveContainer : !this.state.popoverActiveContainer,
      anchorEl: e.target as HTMLElement
    });
  }
  onChildChanged(newState: boolean) {
    this.setState({ popoverActiveContainer: newState });
  }
  closed1(val: number) {
    console.log('called:', val);
  }
}

export default App;
