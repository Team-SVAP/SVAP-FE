export const WatchType: any = {
  normal: "접수된 청원만 보기",
  approval: "승인된 청원만 보기",
  waiting: "검토중인 청원만 보기",
  vote: "투표순대로 보기"
}

export const DetailTypes: any = { // 일반 데이터를 텍스트로 변환
  normal: "접수",
  wait: "검토중",
  access: "승인"
}

export const DetailTypesAPI: any = { // API 데이터를 일반 데이터로 변환
  NORMAL: "normal",
  WAITING: "wait",
  APPROVAL: "access"
}