/**전체 너비 
 * @readonly
 * @constant MAP_WIDTH
 * @type {number} */
export const MAP_WIDTH = 13;

/** 하늘 높이
 * @readonly
 * @constant MAP_HEIGHT
 * @type {number} */
export const MAP_HEIGHT = 25;

/** 스테이지 모양
 * @type {object} — 1단계
 */
export const BrickMap = [
                      //1단계: 기본 배열 생성
                      Array.from({length: MAP_HEIGHT},(e, i) => {
                          //console.log(typeof i);
                          if(i > 3 && i < 9){
                            return Array.from({length: MAP_WIDTH}, () => 1)
                          }else{
                            return Array.from({length: MAP_WIDTH}, () => 0)
                          }
                        }),
                      //2단계: 정방향 직각 삼각형 생성
                      Array.from({length: MAP_HEIGHT},(e, i) => {
                          if(i > 0 && i <= 13) {
                            return Array.from({length: MAP_WIDTH}, (v, j) => {
                              if(i >= j + 1 && j <= MAP_WIDTH) {
                                return 1; //삼각형 내부
                              }else{
                                return 0;}
                            });
                              }else{
                                return Array.from({length: MAP_WIDTH}, () => 0); //삼각형이 없는 영역 '0' 채우기
                              }}),
                        //3단계: 역방향 직각 삼각형 생성
                        Array.from({length: MAP_HEIGHT},(e, i) => {
                          if(i > 0 && i <= 13){
                            return Array.from({length: MAP_WIDTH}, (v, j) => {
                              if(j >= i-1 && j <= MAP_WIDTH) {
                                return 1;
                              }else{
                                return 0;}
                            });
                              }else{
                                return Array.from({length: MAP_WIDTH}, () => 0);
                              }}),
                        //4단계 역방향 정삼각형 생성▽
                        Array.from({length: MAP_HEIGHT}, (e, i) => {
                          if(i >= 1 && i <= 7){
                            return Array.from({length: MAP_WIDTH}, (v, j) => {
                              if(j >= i - 1  && j <= MAP_WIDTH - i) {
                                return 1;
                              }else{
                                return 0;
                              }})
                          }else{
                            return Array.from({length: MAP_WIDTH}, () => 0);
                          }})
];
//console.log(BrickMap);



