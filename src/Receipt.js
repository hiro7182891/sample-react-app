import React from 'react'
// STYLE
import { Button, Modal } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

function Receipt() {

    const [open, setOpen] = React.useState(false)

    return (
        <Modal
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            open={open} trigger={<Button primary>表示</Button>}>
        <Modal.Header>領収書</Modal.Header>
        <Modal.Content>
        
        <div>

            <div id="row1">
            <div>
                領収 太郎 様
            </div>
            <div>
                <p>No.</p>
                <p>発行日</p>
            </div>
            </div>

            <div id="row2">
            <p>-￥76,900-</p>
            <p>
                但し <span>食品,雑貨代金</span>として
                <br />
                上記正に領収いたしました。
            </p>
            </div>

            <div id="row3">

            <div>
                内訳
                <table>
                <tr>
                    <td>税率</td>
                    <td>税抜金額</td>
                    <td>60,000</td>
                </tr>
                <tr>
                    <td>10%</td>
                    <td>消費税額</td>
                    <td>6,000</td>
                </tr>
                <tr>
                    <td>税率</td>
                    <td>税抜金額</td>
                    <td>10,000</td>
                </tr>
                <tr>
                    <td>8%</td>
                    <td>消費税額</td>
                    <td>800</td>
                </tr>
                </table>
            </div>

            <div>
                <p>
                株式会社oo<br/>
                〒123-4567<br/>
                東京都千代田区神田駿河台2-2<br/>

                TEL:987-6543-210<br/>
                登録番号: T1234567890123
                </p>
            </div>

            <div>

            </div>

            </div>

            </div>

        </Modal.Content>
        <Modal.Actions>
            <Button onClick={() => setOpen(false)}>閉じる</Button>
            {/* <Button labelPosition='right' onClick={() => setOpen(false)} positive>はい</Button> */}
        </Modal.Actions>
    </Modal>
    );
}

export default Receipt;
