export type Language = 'en' | 'ta' | 'hi';

export interface TreatmentSetup {
  name: string;
  total: string;
  done: string;
  site: string;
  chemoday: string;
  hospital: string;
  rttime: string;
  chtime: string;
}

export interface Tip {
  t: string;
  g: string;
}

export interface Translation {
  greeting_morning: string;
  greeting_afternoon: string;
  greeting_evening: string;
  progress: string;
  week_label: string;
  of: string;
  fractions: string;
  thisweek: string;
  today_appt: string;
  lg_rt: string;
  lg_ch: string;
  lg_both: string;
  lg_rest: string;
  appt_rt: string;
  appt_ch: string;
  appt_rt_sub: string;
  appt_ch_sub: string;
  alert_title: string;
  alert_sub: string;
  howfeel: string;
  sx: string[];
  gradeinfo: string;
  motiv: string;
  motivby: string;
  tips_lbl: string;
  tips: Tip[];
  library: string;
  le: string[];
  silverline: string;
  setup_title: string;
  setup_sub: string;
  lbl_name: string;
  lbl_totalfx: string;
  lbl_donefx: string;
  lbl_site: string;
  lbl_chemoday: string;
  lbl_hospital: string;
  lbl_rttime: string;
  lbl_chtime: string;
  btn_save: string;
  privacy: string;
  day_names: string[];
  nav: string[];
  no_chemo: string;
  week_days: string[];
}
