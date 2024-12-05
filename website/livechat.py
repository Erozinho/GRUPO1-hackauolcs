from flask import Blueprint, render_template


livechat = Blueprint('livechat', __name__, template_folder="template")


@livechat.route('/live', methods=['GET'])
def pegar_registro():
    return render_template("livechat.html")


@livechat.route('/live', methods=['POST'])
def salvar_registro():
    pass

    return "<h1>Dados criado com sucesso!</h1>"
