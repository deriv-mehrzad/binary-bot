import React from 'react';
import { useSelector } from 'react-redux';
import MessagePage from './message-page.jsx';
import { translate } from '../../../../../common/i18n';

const BotUnavailableMessage = () => {
    const { show_message_page } = useSelector(state => state.ui);

    return (
        show_message_page && (
            <MessagePage
                title={translate('Binary Bot is not available for your account')}
                message={translate(
                    'Unfortunately, you can’t access our automated trading platform with this account. How about trading CFDs on DMT5 or trading multipliers on DTrader instead?'
                )}
            >
                <div className='bot-unavailable-message-page__container'>
                    <a href='https://app.deriv.com/mt5#real' 
                        className='link_button bot-unavailable-message-page__container-button'>
                        {translate('Trade on DMT5')}
                    </a>
                    <a href='https://app.deriv.com' className='link_button'>
                        {translate('Trade on DTrader')}
                    </a>
                </div>
            </MessagePage>
        )
    );
};

export default BotUnavailableMessage;
