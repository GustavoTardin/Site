import ITeam from './ITeam';

export default interface IServiceResponse {
  type: null | number,
  message: ITeam | string
}
