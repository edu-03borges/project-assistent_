import { container } from "tsyringe";
import { LangEnglishRepository } from "../../modules/Phrase/infra/typeorm/repositories/LangEnglishRepository";
import { LangSpanishRepository } from "../../modules/Phrase/infra/typeorm/repositories/LangSpanishRepository";
import { LangPortugueseRepository } from "../../modules/Phrase/infra/typeorm/repositories/LangPortugueseRepository";
import { ParametersRepository } from "../../modules/Parameters/infra/typeorm/repositories/ParametersRepository";
import { ILangEnglishRepository } from "../../modules/Phrase/repositories/ILangEnglishRepository";
import { ILangPortugueseRepository } from "../../modules/Phrase/repositories/ILangPortugueseRepository";
import { IParametersRepository } from "../../modules/Parameters/repositories/IParametersRepository";
import { IUsersRepository } from "../../modules/Accounts/repositories/IUsersRepository";
import { UsersRepository } from "../../modules/Accounts/infra/typeorm/repositories/UsersRepository";

container.registerSingleton<ILangEnglishRepository>(
    "LangEnglishRepository",
    LangEnglishRepository
)

container.registerSingleton<ILangEnglishRepository>(
    "LangSpanishRepository",
    LangSpanishRepository
)

container.registerSingleton<ILangPortugueseRepository>(
    "LangPortugueseRepository",
    LangPortugueseRepository
)

container.registerSingleton<IParametersRepository>(
    "ParametersRepository",
    ParametersRepository
)

container.registerSingleton<IUsersRepository>(
    "UsersRepository",
    UsersRepository
)




