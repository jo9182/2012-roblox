import * as Auth from './Auth';
import * as Catalog from './Catalog';
import * as Users from './Users';
import * as BuildersClub from './BuildersClub';
import * as Economy from './Economy';
import { Required } from '@tsed/common';

class ErrorDetails {
    @Required()
    code: string;
}

export class Error {
    @Required()
    success: boolean;
    @Required()
    error: ErrorDetails;
}

export {
    Auth,
    Catalog,
    Users,
    BuildersClub,
    Economy,
}