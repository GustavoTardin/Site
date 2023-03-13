import Match from '../../../database/models/MatchModel';

export default interface IServiceResponse {
  type: null | number,
  message: Match | Match[] | string
}
