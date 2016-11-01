/**
 * Created by Vlad on 9/6/2016.
 */

export class VOCategory{
  id:number;
  label:string;
  constructor(obj:any){for(let str in obj) this[str] = obj[str];}
}

export class VONavigationItem{
  id:number;
  label:string;
  href:string;
  glyph: string;

  constructor(obj:any){for(let str in obj) this[str] = obj[str];}
}
export class VONavigation{
  version:string;
  name:string;
  css:any
  list:VONavigationItem[];

  constructor(obj:any){for(let str in obj)this[str] = obj[str];
    this.list = this.list.map(function (item) { return new VONavigationItem(item) })

  }


}

export class  VOImage {
  static THUMB:string = 't_thumbnail';
  static SMALL:string = 't_small';
  static MEDIUM:string = 't_medium';
  static LARGE:string = 't_large';
  static XLARGE:string = 't_xlarge';
  src:string;
  id:number;
  name:string;
  type:string;
  prefix:number;
  isDefault:string;
  dirty:boolean;
  selected:boolean;
  posts_id:number
  constructor(data: any) {  for (var str in data)this[str] = data[str]; }
}
export class VOAttachment<VOImage> {
  id:number;
  name:string;
  type:string;
  prefix:number;
  isDefault:string;
  src:string;
  constructor(data:any) { for (var str in data)this[str] = data[str]; }
}

export class VOMembership{
  membershipStatus:string;
}

export class VOMember{
  id: number;
  city: number;
  displayname:string
  email: string;
  firstname: string;
  lastname: string;
  latitude: number;
  longitude: number;
  occupation:string;
  phone: string;
  profile_pic: string;
  role: string;
  username: string;
  constructor(data: any) {  for (var str in data)this[str] = data[str]; }
}

export  class VOAlliance {
  id: number;
  createdDate: string;
  isMemberTotalVisible: boolean;
  isBlackBox:boolean;
  isOpen: boolean;
  isActive:boolean;
  constructor(data: any) {  for (var str in data)this[str] = data[str]; }
}






export class VOPost{

  static NEED:string ='need';
  static OFFER:string='offer';

  id:number;
  title:string;
  country:string;
  province:string;
  city:string;
  categoryid:number;
  keywords:string;
  description:string;


  businessPartnership:boolean;
  exchange:boolean;
  donate:boolean;
  internship:boolean;
  money:boolean;
  fixed:number;
  hourlyRate:number;
  commission:number;

  attachments:number;
  allianceMembers:VOMembership[];

  openToAllianace:boolean;
  visibleToPublic:boolean;

  type:string;



  selected:boolean;

  constructor(obj:any) {
    for (let str in obj) this[str] = obj[str];
  }
}



export class VOService extends VOPost{

  alliance:VOAlliance;


/*
 nostyle:boolean;
 image:string;
  fixedPrice:number;
  hourlyRateFrom:number;
  hourlyRateTo:number;


  matchPercentage:number;
  numberReviews:number;
  numberTrades:number;
  numberViews:number;
  serviceExchange:boolean;
  serviceRating:number;
  serviceType:number;
  summary:string;*/
  user:VOMember;

  recommenderUser:VOMember;

  constructor(obj:any){
    super(obj);

    if(this.alliance) this.alliance = new VOAlliance(this.alliance);
    if(this.recommenderUser) this.recommenderUser = new VOMember(this.recommenderUser);
    if(this.user) this.user = new VOMember(this.user);
  }
}


export class VOAccount {
  id: number;
  type: string;
  username: string;
  password:string
  firstName:string;
  lastName:string;
  email:string;
  user_id:number;
  constructor(obj:any){ for(let str in obj)this[str] = obj[str];}
}

export class VOUser{
    static ADMIN:string = 'admin';
    static MEMBER:string = 'member';
    id:number;
    role:string;
    PhoneNumber: string;
    phoneVisible: boolean;
    PrimaryEmail: string;
    emailVisible: boolean;
    displayName: string;

    SessionId:string;
    token:string;
    isLogin:boolean;

    profile_pic: string;
    jobtitle: string;
    company: string;
    firstName: string;
    lastName: string;
    occupation: string;
    url: string;
    description: string;
    offers: number;
    needs: number;
    numberOfOpps: number;

    distance: number;

    constructor(obj: any) {
        for (let str in obj)this[str] = obj[str];
        //this.profile_pic= VOSettings.images_small+this.profile_pic;
    }

}

export class VOUserExt extends VOUser{
  background_pic:string;
  video:string;
  resume:string;
  province:string;
  city:string;
  country:string;
  latitude:number;
  longitude:number;
  skillset:string[];
  interests:string[];
  constructor(obj:any){ super(obj);}
}




export class VOSettings{
  //static server:string = 'http://grabopapi2dev.us-west-2.elasticbeanstalk.com/api/v1';
    static  posts:string = 'api/posts.php';
  static server:string = 'api/service.php?api=';
  static upload:string ='api/upload.php';
  static login:string ='api/login.php?api=';
  static images:string = 'http://res.cloudinary.com/al3kosvh/image/upload/';
  static SMALL:string ='t_thumbnail';
  static images_small:string = 'http://res.cloudinary.com/al3kosvh/image/upload/';

  static get user():VOUser{
    if(!VOSettings._user)VOSettings._user = new VOUser({id:154});
    return VOSettings._user
  };
  static _user:VOUser;
  static  set user(user:VOUser){VOSettings._user=user;}
  static saveVisit(loc:any[]){ localStorage.setItem('lastVisit',JSON.stringify(loc));}
  static getVisit(){return JSON.parse(localStorage.getItem('lastVisit'));}
}

export class VOResult{
  error:string;
  success:string;
  insertId:number;
  message:string;
  constructor(obj:any){ for(let str in obj)this[str] = obj[str];}
}


export class VOSearch{
  pattern:string;
  country:string;
  province:string;
  city:string;
  partnership:boolean;
  exchange:boolean;
  donate:boolean;
  internship:boolean;
  money:boolean;
  fixedFrom:number;
  fixedTo:number;
  hourlyFrom:number;
  hourlyTo:number;
  commissionFrom:number;
  commissionTo:number;
  constructor(obj:any){ for(let str in obj)this[str] = obj[str];}

}
