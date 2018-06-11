export interface datatype {
    runsScored: number,
    isOut: boolean,
    isExtra?: boolean, 
    dismissalType?: string,
    dismissalInfo?: DismissalInfo,
    extraType?: string,
    extraInfo: {
        runsOffered: number
    },
    batsmanName: string,
    bowlerName: string
   }
   
   export interface DismissalInfo {
    fielderName: string,
    hasBatsmanCrossed: boolean
   }