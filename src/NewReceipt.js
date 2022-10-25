import React from 'react'
// STYLE
import { Button, Modal, Input, Table, Select, Label } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import './newReceipt.css';

function NewReceipt() {

    // IDカウンタ
    const [id, setId] = React.useState(1);

    // 但し書き
    const [proviso, setProviso] = React.useState([
        {id: 0, proviso: "", price: 0},
    ])

    // モーダル開閉
    const [open, setOpen] = React.useState(false)

    const provisoOptions = [
        { key: '01', value: '飲食代', text: '飲食代' },
        { key: '02', value: '書籍代', text: '書籍代' },
        { key: '03', value: '消耗品費', text: '消耗品費' },
        { key: '04', value: '広告宣伝費', text: '広告宣伝費' },
        { key: '05', value: '通信費', text: '通信費' },
        { key: '06', value: '宿泊費', text: '宿泊費' },
        { key: '07', value: '交通費', text: '交通費' },
        { key: '08', value: 'ギフト代', text: 'ギフト代' },
    ]

    return (
        <Modal
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            open={open} trigger={<Button primary>新規作成</Button>}>
        <Modal.Header>領収書</Modal.Header>
        <Modal.Content>

        <div id="row1">
            <Input id="name" labelPosition='right' type='text' placeholder='宛名を入力してください。'>
                <Label>宛名</Label>
                <input />
                <Label>様</Label>
            </Input>

            <Button id="addBtn" onClick={() => {
                // レコード追加処理
                setId(id + 1); // カウンタ追加
                setProviso([...proviso, {id: id, proviso: "", price: 0}])
            }}>追加</Button>
        </div>
        
        <Table id="provisoTable">
            <Table.Header>
            <Table.Row>
                <Table.HeaderCell>代金</Table.HeaderCell>
                <Table.HeaderCell>但し書き</Table.HeaderCell>
                <Table.HeaderCell></Table.HeaderCell>
            </Table.Row>
            </Table.Header>
        
            <Table.Body>

            {proviso.map((data) => {
                return <Table.Row key={data.id} className="tableRow">
                    <Table.Cell>
                        <Input placeholder="代金を入力してください。" onChange={(e) => {

                            // 金額変更処理
                            const ps = proviso.map((d, index) => {
                                return (index == data.id ? {id: d.id, proviso: d.proviso, price: e.target.value} : d)
                            });
                            setProviso(ps);

                        }} value={data.price} />
                    </Table.Cell>
                    <Table.Cell>
                        <Select id="provisoSelect" placeholder='但し書きを選択してください。' value={data.proviso}
                        onChange={(e) => {
                            
                            // 但し書き変更処理
                            const p = e.target.getElementsByClassName("text")[0].innerText
                            const ps = proviso.map((d, index) => {
                                return (index == data.id ? {id: d.id, proviso: p, price: d.price} : d)
                            });
                            setProviso(ps);

                        }} options={provisoOptions} />
                    </Table.Cell>
                    <Table.Cell>
                        <Button onClick={() => setProviso(proviso.filter((d, index) => (d.id != data.id))) }>削除</Button>
                    </Table.Cell>
                </Table.Row>;
            })}

            </Table.Body>
        </Table>

        </Modal.Content>
        <Modal.Actions>
            <Button onClick={() => setOpen(false)}>閉じる</Button>
            <Button color="blue" onClick={() => setOpen(false)}>確定</Button>
        </Modal.Actions>
        </Modal>
    );
}

export default NewReceipt;
