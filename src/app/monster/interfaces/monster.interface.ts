export interface Country {
    name:           string;
    topLevelDomain: string[];
    alpha2Code:     string;
    alpha3Code:     string;
    callingCodes:   string[];
    capital:        string;
    altSpellings:   string[];
    region:         string;
    subregion:      string;
    population:     number;
    latlng:         number[];
    demonym:        string;
    area:           number;
    gini:           number;
    timezones:      string[];
    borders:        string[];
    nativeName:     string;
    numericCode:    string;
    currencies:     Currency[];
    languages:      Language[];
    translations:   Translations;
    flag:           string;
    regionalBlocs:  RegionalBloc[];
    cioc:           string;
}

export interface Currency {
    code:   string;
    name:   string;
    symbol: string;
}

export interface Language {
    iso639_1:   string;
    iso639_2:   string;
    name:       string;
    nativeName: string;
}

export interface RegionalBloc {
    acronym:       string;
    name:          string;
    otherAcronyms: any[];
    otherNames:    any[];
}

export interface Translations {
    de: string;
    es: string;
    fr: string;
    ja: string;
    it: string;
    br: string;
    pt: string;
    nl: string;
    hr: string;
    fa: string;
}

// Generated by https://quicktype.io

export interface Monsters {
  count:   number;
  results: Result[];
}

export interface Result {
  index: string;
  name:  string;
  url:   string;
}

export interface Monster {
  index:                  string;
  name:                   string;
  size:                   string;
  type:                   string;
  alignment:              string;
  armor_class:            number;
  hit_points:             number;
  hit_dice:               string;
  speed:                  Speed;
  strength:               number;
  dexterity:              number;
  constitution:           number;
  intelligence:           number;
  wisdom:                 number;
  charisma:               number;
  proficiencies:          ProficiencyElement[];
  damage_vulnerabilities: any[];
  damage_resistances:     any[];
  damage_immunities:      any[];
  condition_immunities:   any[];
  senses:                 Senses;
  languages:              string;
  challenge_rating:       number;
  xp:                     number;
  special_abilities:      SpecialAbility[];
  actions:                Action[];
  legendary_actions:      LegendaryAction[];
  url:                    string;
}

export interface Action {
  name:          string;
  desc:          string;
  options?:      Options;
  attack_bonus?: number;
  dc?:           Dc;
  damage?:       Damage[];
  usage?:        Usage;
}

export interface Damage {
  damage_type: PurpleProficiency;
  damage_dice: string;
}

export interface PurpleProficiency {
  index: string;
  name:  string;
  url:   string;
}

export interface Dc {
  dc_type:      PurpleProficiency;
  dc_value:     number;
  success_type: string;
}

export interface Options {
  choose: number;
  from:   From[];
}

export interface From {
  "0": The0;
}

export interface The0 {
  name:  string;
  count: number;
  type:  string;
}

export interface Usage {
  type:  string;
  times: number;
}

export interface LegendaryAction {
  name:          string;
  desc:          string;
  attack_bonus?: number;
  damage?:       Damage[];
}

export interface ProficiencyElement {
  value:       number;
  proficiency: PurpleProficiency;
}

export interface Senses {
  darkvision:         string;
  passive_perception: number;
}

export interface SpecialAbility {
  name: string;
  desc: string;
  dc?:  Dc;
}

export interface Speed {
  walk: string;
  swim: string;
}
