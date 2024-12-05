from flask import Flask


def create_app():
    app = Flask(__name__)
    app.config['SECRET KEY'] = 'UOLCHATSEX@123'

    from website.livechat import livechat

    app.register_blueprint(livechat, url_prefix="/")

    return app
