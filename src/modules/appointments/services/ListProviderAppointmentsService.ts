import { injectable, inject } from 'tsyringe';
//import IUsersRepository from '@modules/users/repositories/IUsersRepository';
//import User from "@modules/users/infra/typeorm/entities/User";
import Appointment from '../infra/typeorm/entities/Appointment';
import IAppointmentsRepository from '../repositories/IAppointmentsRepository';
interface IRequest {
  provider_id: string;
  day: number;
  month: number;
  year: number;
}


@injectable()
export default class ListProviderAppointmentsService {
  constructor(
    @inject('AppointmentsRepository')
    private appointmentsRepository: IAppointmentsRepository,
  ) { }
  public async execute({ provider_id, year, month, day }: IRequest): Promise<Appointment[]> {
    const appointments = await this.appointmentsRepository.findAllInDayFromProvider({
      provider_id,
      year,
      month,
      day
    });
    return appointments;



  }
}
