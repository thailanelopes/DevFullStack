// Metodos que se pode ter dentro de um controller: index, show, update, store, destroy.
/*
index: listagem de sessoes
store: Criar uma sessao
show: Quando queremos listar uma UNICA sessao
update: quando queremos alterar alguma sessao
destroy: quando queremos deletar uma sessao
*/

import * as Yup from 'yup';
import User from '../models/User';

class SessionController {
  async store(req, res) {
    const schema = Yup.object().shape({
      email: Yup.string().email().required(),
    });

    const { email } = req.body;

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Falha na Validacao. ' });
    }

    // Verificando se esse usuario já existe
    let user = await User.findOne({ email });

    if (!user) {
      user = await User.create({ email });
    }

    return res.json(user);
  }
}

export default new SessionController();
