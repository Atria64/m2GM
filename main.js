javascript:(
    function(){
        const href = document.location.href;
        if (href.startsWith('https://manaba') === false) {
            alert("[エラー]対象がmanabaではありません");
            return;
        }

        //解析処理
        const table = document.querySelector("table");
        let title = table.querySelector("th").innerHTML.trim();
        //"個別指導":"手動採点"などの要素を取り除く
        title = title.replace(/<("[^"]*"|'[^']*'|[^'">])*>/g,'').trim();

        const courseName = document.getElementById("coursename").innerHTML;
        const trs = table.querySelectorAll("tr");
        const startDate = '受付開始日時' + ' | ' + trs[2].querySelector("td").innerHTML;
        const endDate = '受付終了日時' + ' | ' + trs[3].querySelector("td").innerHTML;


        //終了処理
        var titleAndLink = '['+courseName+']('+href+')'+'\n'
                            + title + '\n'
                            + startDate + '\n'
                            + endDate;
        execCopy(titleAndLink);
        alert("クリップボードにコピーしました。");
        
        function execCopy(string){
            let div = document.createElement('div');
            let pre = document.createElement('pre');
            
            pre.style.webkitUserSelect = 'auto';
            pre.style.userSelect = 'auto';

            div.appendChild(pre).textContent = string;

            //divを画面外に持っていく
            let s = div.style;
            s.position = 'fixed';
            s.right = '200%';

            document.body.appendChild(div);
            document.getSelection().selectAllChildren(div);

            let result = document.execCommand('copy');

            //divを取り除く
            document.body.removeChild(div);

            return result;
        }
    }
)();