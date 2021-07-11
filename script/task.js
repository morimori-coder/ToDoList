// タスククラス
class Task{
    constructor(taskValue){
        this.taskValue = taskValue;
        this.createdDateTime = new Date();

        console.log(this.createdDateTime.getDay());
        console.log(this.createdDateTime.getDate());
        console.log(this.createdDateTime.getHours());
        console.log(this.createdDateTime.getFullYear());
        // 将来的にはID,優先順位,完了期限,作成日時を追加する予定
        // ID：プライマリーキー,int
        // タスク（文字列）
        // 優先順位：SQL server 内では0,1,2の数値を扱うこととする。tinyint型
        // 完了期限：date型（時間は含めない）
        // 作成日時：datatime型(SQL serverの型)
    }
}