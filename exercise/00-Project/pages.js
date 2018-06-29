const page = {}
page.home = `
    <link rel="stylesheet" href="drop_list_search.css"/>
    <div id="rcorners6" style="margin-top:50px; position:absolute; left:310px; top:130px">
            <p>Hello everyone！</p>
            <p>希望大家會喜歡這的心理測驗網站，玩得開心！</p>
            <p>貼心小建議：網頁的視窗縮放調至100%，最為適宜操作介面。</p>
    </div>
`

page.answer_sence = `
    <link rel="stylesheet" href="image gallery.css"/>
    <link rel="stylesheet" href="div_answer.css"/>

    <div id="rcorners3">
    <h2  style="text-align: center">你的愛情觀是什麼？</h2>
    <p>如果你從沒買過一套屬於自己的音響組合，而你也希望添置一套，你會選下列哪一款音響呢？</p>
    <div id="rcorners4" class="answer">
        <h3>A. 較小型的床頭音響</h3>
        <p>你會是個保守的人，自我意識極強。</p>
        <p>要你真真正正地享受愛情就像叫你“以身試法”似的，對方確實要花很多工夫，可以說是要加倍努力才能取悅你。你對要“身體力行”的愛情不太有興趣，你會比較喜歡沈醉於雙方的親密關係。</p>
    </div>

    <div id="rcorners4" class="answer">
        <h3>B. 較大型的音響組合</h3>
        <p>對於生活上的事情，均採取我行我素的態度。</p>
        <p>愛情也不例外，不會為了別人的眼光而改變自己。非常懂得享受愛情，也愛選同樣貪求新鮮刺激的人作伴侶。而過分容易與人發生關係是件危險的事，宜多加留意。</p>
    </div>

    <div id="rcorners4" class="answer">
        <h3>C. 手提音響組合</h3>
        <p>可能由於受到成長背景的影響，你有抑制自己的傾向，朋友們不可以在你面前談論愛情。</p>
        <p>表現上你是乖乖牌，但實際上內心充滿叛逆的心態，有時甚至做出令人意想不到的事，所以，一夜情是絕對有可能發生在你身上的。</p>
    </div>

    <div id="rcorners4" class="answer">
        <h3>D. 將小喇叭接上隨身聽</h3>
        <p>你會是個熱愛家庭的人，除了家庭之外，你也熱愛愛情生活，是個極度需要愛情的人。</p>
        <p>而佔有欲也極強，假如一旦與愛侶發生愛情，你便要獨享他的全部，甚至對他死纏爛打，所以每每成？伴侶的負擔，如果有這樣的事情發生，你便要正視對方的需要，跟他多做溝通。</p>
    </div>
`

page.answer_fear = `
    <link rel="stylesheet" href="image gallery.css"/>
    <link rel="stylesheet" href="div_answer.css"/>

    <div id="rcorners3">
    <h2  style="text-align: center">你最害怕哪一方面被套牢？</h2>
    <p>如果你要演戲，想挑戰高難度的悲情主角，你會選擇哪一個角色？</p>
    <div id="rcorners4" class="answer">
        <h3>A. 專幫腳臭人按摩的瞎子</h3>
        <p>你最害怕自由被套牢</p>
        <p> 因為你可以把自己管得非常好，所以你很不喜歡被別人管，當對方管你的時候，你就會覺得很痛苦，只有你可以管別人，別人是不能管你的。</p>
    </div>

    <div id="rcorners4" class="answer">
        <h3>B. 為愛下海的長短腳舞女</h3>
        <p>你最害怕炒飯被套牢</p>
        <p> 感覺對你來說很重要，當你跟一個人在一起久了，炒飯就會覺得好像是例行公事一樣，讓你覺得很痛苦。因為你要的真的是一種感覺而已，而不是只有性。</p>
    </div>

    <div id="rcorners4" class="answer">
        <h3>C. 一直被強暴的失憶症患者</h3>
        <p>你最害怕感情被套牢</p>
        <p>你對工作或其他方面都很放得開，唯獨在感情上真的放不開，一旦付出真情，就像付出生命一樣，甚至失去自我，就會覺得很害怕失去對方。</p>
    </div>

    <div id="rcorners4" class="answer">
        <h3>D. 為了討生活而賣菜的重聽者</h3>
        <p>你最害怕金錢被套牢</p>
        <p>你會覺得在經濟上，最好是兩個人可以各自獨立的，你沒有辦法忍受對方給零用錢過日子的生活。若是把錢交給對方管理或是被對方套住，反而就會覺得對方很討厭。</p>
    </div>
`

page.answer_mood = `
    <link rel="stylesheet" href="image gallery.css"/>
    <link rel="stylesheet" href="div_answer.css"/>

    <div id="rcorners3">
        <h2  style="text-align: center">你的性情如何？</h2>
        <p>假設獨居的你，居住在兩房一廳的屋子，你將如何佈置其中一間面對陽光的房間？</p>
        <div id="rcorners4" class="answer">
            <h3>A. 放張床/當寢室</h3>
            <p>你是一個非常冷靜的人，對於任何的事都有極合理的看法，就算是處在熱戀的的階段也會仔細地考慮對方是否合適。</p>
            <p>若是遇到一個理想的物件，一定會積極主動地去追求，但是由於你的眼光太高，所以經由相親而結婚的幾率很高。</p>
        </div>

        <div id="rcorners4" class="answer">
            <h3>B. 擺張書桌、書架/當書房</h3>
            <p>你的好奇心很強，東想西想的，所以你對結婚並不積極。</p>
            <p>你熱衷於生活中的一切，卻少有戀愛的經驗，但你可能會突然地閃電結婚，嚇死周遭的人。</p>
        </div>

        <div id="rcorners4" class="answer">
            <h3>C. 當會客室</h3>
            <p>你是一個很喜歡熱鬧的人，身邊的男女朋友有一堆，是一個機會很多的人。</p>
            <p>因此你可能會在一場戀愛之後來一個閃電結婚，或總是朋友，而無法發展戀愛關係。</p>
        </div>
    
        <div id="rcorners4" class="answer">
            <h3>D. 擺餐桌/當餐廳</h3>
            <p>對於婚姻你懷有很大的夢想，你渴望擁有一場轟轟烈烈的戀愛，豪華的婚禮，從此過著幸福快樂的日子。</p>
            <p>但事與願違，婚期總是愈拖愈晚。婚後的你是以家庭為優先的人。</p>
        </div>
    </div>
`

page.answer_flower = `
    <link rel="stylesheet" href="image gallery.css"/>
    <link rel="stylesheet" href="div_answer.css"/>

    <div id="rcorners3">
        <h2  style="text-align: center">你花心程度？</h2>
        <p>報紙上登了一條社會新聞，報導說有個女子因為情變挽留不了男友，拿刀殺死了他，你認為這女子在行兇前會對他說什麼？</p>
        <div id="rcorners4" class="answer">
            <h3>A. 我恨你！我要殺了你</h3>
            <p>其實你很想移情別戀並與另一個異性發生關係，但是沒有勇氣這麼做，只流於空想。</p>
            <p>這並不是你的罪惡感在作祟，而是你太膽小。</p>
        </div>

        <div id="rcorners4" class="answer">
            <h3>B. 是你逼我的</h3>
            <p>錯將友情當愛情的你，花心程度很低。</p>
            <p>不過有時也會有移情別戀的念頭，但是你並不想背上背叛情人的罪名，所以不會這麼做。</p>
        </div>

        <div id="rcorners4" class="answer">
            <h3>C. 你對不起我</h3>
            <p>你的花心程度極低，只要有了愛人，就不會和別的異性交往，更別說發生性關係。</p>
            <p>這並不是因為你是個專一的人，而是因為你很怕麻煩。</p>
        </div>
    
        <div id="rcorners4" class="answer">
            <h3>D. 我愛你，我要和你一起死</h3>
            <p>你是個容易見異思遷的人，移情別戀和一夜情對你是天經地義的事，而且也不會有罪惡感。</p>
        </div>

        <div id="rcorners4" class="answer">
            <h3>E. 你再沒機會和那個狐狸精一起</h3>
            <p>你的花心程度較高，意志不夠堅定，如果對方熱情地誘惑你，你一定會為高潮而陷下去。</p>
            <p>不過，你會覺得有罪惡感，所以不會主動去勾引別人。你的理由就是，不好意思拒絕別人。</p>
        </div>
    </div>
`

page.answer_alone =`
    <link rel="stylesheet" href="image gallery.css"/>
    <link rel="stylesheet" href="div_answer.css"/>

    <div id="rcorners3">
        <h2  style="text-align: center">看穿你的寂寞？</h2>
        <p>搬到了夢寐以求的鄉間小木屋，這時體貼的好友，想到在木屋外最適合觀賞日落的位置，買一張休閒的長椅給你，你想這椅子，會是什麼樣子的呢？</p>
        <div id="rcorners4" class="answer">
            <h3>A. 藤製涼椅</h3>
            <p>你是一個很怕寂寞的人，只要一寂寞就會忍不住什麼悲傷的情緒都上來了，把自己弄得多愁善感的樣子。</p>
            <p>其實人生就是這個樣子，你也不必想得這麼多，快樂點過日子吧！</p>
        </div>

        <div id="rcorners4" class="answer">
            <h3>B. 古樸的長椅</h3>
            <p>你是一個人可以自己獨處的人，甚至可以很享受這種感覺。</p>
            <p>只是你很容易會被回憶所苦，雖然平時就像個陀螺一樣打轉著，可是一旦思潮沈澱，就會為從前的種種感到無比的唏噓，哎…放輕鬆點吧！</p>
        </div>

        <div id="rcorners4" class="answer">
            <h3>C. 高雅的法製傢俱</h3>
            <p>你也是一個很怕寂寞的人，而面對寂寞的方式就是趕快找朋友陪你一起聊天。</p>
            <p>看來你們家的打電話頻率會特別高，不然你也會是個很喜歡東看看，西看看，增加生活上的享受，這是讓你忘卻寂寞的方法！</p>
        </div>
    
        <div id="rcorners4" class="answer">
            <h3>D. 懸掛像是鞦韆的椅子</h3>
            <p>一個人獨處的時候，你最常做的就是發呆，不然就是在那裡沒事東想西想的，你很能沈醉在自己的幻想世界之中。</p>
            <p>你是一個性情中人，可能為了任何的事，就感動的痛哭流涕，不過偶爾流流淚對身體也是有益的噢！</p>
        </div>
    </div>
`

page.answer_sad = `
    <link rel="stylesheet" href="image gallery.css"/>
    <link rel="stylesheet" href="div_answer.css"/>

    <div id="rcorners3">
        <h2  style="text-align: center">你受委屈時的反應？</h2>
        <p>通常看到一位熟悉的朋友在前面不遠處，你會……</p>
        <div id="rcorners4" class="answer">
            <h3>A. 喊朋友的名字，直到對方回頭</h3>
            <p>大發脾氣</p>
            <p>你在受到不應有的指責，或不公平的待遇時，火氣不需要醞釀太久，一下子就上來了。不滿情緒的發洩是相當及時且直接的，充滿濃濃火藥味的戰爭也就瞬間拉開帷幕。不管場合，不分對象，也不考慮時間，只要對方的言行讓你覺得不爽，覺得付出沒有獲得相應的回報，這樣的委屈，你是無論如何也沒辦法忍住的。</p>
            <p>退一步海闊天空，忍一時風平浪靜。不要因為自己的一時氣憤就做出極端的行為，別因小失大，後悔莫及。</p>
        </div>

        <div id="rcorners4" class="answer">
            <h3>B. 跑上前，拍拍對方的肩膀</h3>
            <p>找人訴苦</p>
            <p>為他人著想而操心操勞，犧牲自己，到頭來卻遭到埋怨。這份委屈之情，你實在難以憋在心裡，可當場直接挑明又做不出來，於是找人訴苦成了你通常的反應。和密友，知己聊天，當面也好，電話也成，最重要的是你不吐不快。心裡太難過了，拚命流淚也無法化解心中的鬱悶，如果不在朋友那得到安慰，你真不知道要怎樣讓自己好起來。</p>
            <p>受了委屈，心情不好，傾訴一番是發洩煩悶的有效途徑，但也得有個限度，千萬別把朋友當垃圾桶，讓人敬而遠之。</p>
        </div>

        <div id="rcorners4" class="answer">
            <h3>C. 繼續走自己的</h3>
            <p>悶悶不樂</p>
            <p>一旦受了委屈，無論事件大小，你的好心情就會立刻消失，呈現零度的壓抑情緒。和對方大吵大鬧？你沒這份膽量；找別人大倒苦水？又讓你覺得很丟臉。於是，只好把所有的鬱悶憋在心裡，唉聲歎氣，悄悄的落淚，甚至於飯也吃不下，覺也睡不好。</p>
            <p>心結解不開，就無法繼續前進。受了委屈，想不通，別人不好說，至少家人會是你最堅強的後盾。如果實在沒有可以傾訴的對象，參加戶外活動也是不錯的紓解管道。</p>
        </div>
    
        <div id="rcorners4" class="answer">
            <h3>D. 快步走上前，和對方並排走，等對方先注意到自己</h3>
            <p>一笑了之</p>
            <p>你是一個心胸開闊的人，獨樂樂不如眾樂樂，總希望快樂能無限放大，碰到任何不順，都會很快跳過。所以，遇到委屈的事，不會做無謂的口舌之爭，在你看來，簡直就是浪費時間和情緒。有精力為自己辯護，不如去追尋更多美好事物。</p>
            <p>日久見人心，路遙知馬力，孰對孰錯，時間一到，自然會見分曉。人生就像一面鏡子，你對著它哭，它絕對不會對著你笑。很多時候，其實得失根本就沒有那麼重要，關鍵就在於你看不看得開。一笑了之，委屈和煩惱都拋給了別人。</p>
        </div>
    </div>
`

page.answer_know = `
    <link rel="stylesheet" href="image gallery.css"/>
    <link rel="stylesheet" href="div_answer.css"/>

    <div id="rcorners3">
        <h2  style="text-align: center">看看你裝傻的本領？</h2>
        <p>在你生日的那天，朋友送了一 個精緻的花別針，這時的你會將它別在那？</p>
        <div id="rcorners4" class="answer">
            <h3>A. 帽子上</h3>
            <p>虛偽指數：90%</p>
            <p>你總習慣對人隱藏真正的心意，當大家對某件事情有爭議時，你總是默默的在一旁聽著，絕對不會坦白的。即使肯說，你也保持模稜兩可的價值觀（因為你非常害怕別人的吐嘈～），是一個不說話，別人就猜不出你真正心意的人。</p>
        </div>

        <div id="rcorners4" class="answer">
            <h3>B. 胸前</h3>
            <p>虛偽指數：70%</p>
            <p>你是一個沒有人認同，就沒有安全感的人，雖然你常會有所謂的原則，但是一受到別人的質疑，就能馬上見風轉舵。雖然你努力掩飾不安，可是社會經歷尚淺的你，多多少少會表現在臉上。</p>
        </div>

        <div id="rcorners4" class="answer">
            <h3>C. 背包上</h3>
            <p>虛偽指數：30%</p>
            <p>你的外表和內心一樣，幾乎都是單純而透明的，一舉一動很容易就會表現在臉上，是一個很難隱瞞自己，也很難隱瞞別人的人。</p>
        </div>
    
        <div id="rcorners4" class="answer">
            <h3>D. 領巾上</h3>
            <p>虛偽指數：50%</p>
            <p>你是一個非常堅持自己想法的人，但聰明的你，絕對不會輕易嘗試硬碰硬的方式，而是會選擇性的刺探別人，但不見得會見風轉舵，這是因為你對自己充滿自信。</p>
        </div>
    </div>
`

page.answer_pan = `
    <link rel="stylesheet" href="image gallery.css"/>
    <link rel="stylesheet" href="div_answer.css"/>

    <div id="rcorners3">
        <h2  style="text-align: center">你的耍狠程度？</h2>
        <p>我們生活周遭，常會遇到底下幾種疼痛，你個人覺得哪種痛苦是你最無法忍受的？</p>
        <div id="rcorners4" class="answer">
            <h3>A. 牙齒痛</h3>
            <p>耍狠程度：100%</p>
            <p>你耍狠發飆的程度讓人無話可說！不管你的長相是否凶神惡煞或是文靜貌，一發起飆來總是氣勢萬千，震攝當場！讓人印象深刻，以後當然也不會再隨便招惹你。</p>
            <p>只是你也必須學習控制自己的脾性，才不會因為發飆次數多了，就把身邊的好友們也一併嚇跑喔！</p>
        </div>

        <div id="rcorners4" class="answer">
            <h3>B. 閃到腰的痛</h3>
            <p>耍狠程度：60%</p>
            <p>你的個性平穩，也不會隨便發怒。所以遇到許多不合理的事情，你只會在心中咒罵，不會輕易表露出來。</p>
            <p>只是你也很容易去累積自己的情緒，時間一久，很可能會因為一件小事發作，特別是那種長期讓你不爽的人。因為理由正當，所以對方也自然懂得去收斂。</p>
        </div>

        <div id="rcorners4" class="answer">
            <h3>C. 腳抽筋的痛</h3>
            <p>耍狠程度：80%</p>
            <p>你平時自我保護的動作蠻明顯的喔。因為心理隔了道牆，所以你不隨便和陌生人打交道，也不會主動跟人哈啦，甚至也容易因為對方的輕浮或是小玩笑而面有慍色，讓人感覺你不好相處。</p>
            <p>只是相處時間久了，你的心房漸開，反而讓人直覺你是最罩得住的朋友。</p>
        </div>
    
        <div id="rcorners4" class="answer">
            <h3>D. 手麻掉的痛</h3>
            <p>耍狠程度：40%</p>
            <p>你不適合耍狠。因為就連在發飆過程當中，你也多所顧忌，不是顧忌對方會從此跟你翻臉成仇，就是顧忌對方以後會挾怨報復。使得你就算有在正當的理由生氣，也會因為你的態度，而讓人不知道錯在哪一方。</p>
            <p>不妨試著以理服人，那可能會變成你的長處。</p>
        </div>

        <div id="rcorners4" class="answer">
            <h3>E. 被愛人傷害的痛。</h3>
            <p>耍狠程度：20%</p>
            <p>你大概是天底下最不可能發飆耍狠的人了。不管你心理到底有多生氣，你幾乎都不會當場發作，只會到沒有人的地方發瘋怒吼來宣洩，甚至就此把情緒給悶在心裡，默默承受；不理人也是你最常用的方法。</p>
            <p>只是有個適當的情緒宣洩管道，這樣你的人格才會健康正常。</p>
        </div>
    </div>
`

page.answer_face = `
    <link rel="stylesheet" href="image gallery.css"/>
    <link rel="stylesheet" href="div_answer.css"/>

    <div id="rcorners3">
        <h2  style="text-align: center">你真的不是外貌協會嗎？</h2>
        <p>你的面前有一扇木製的大門，當你打開門時，傳來一陣陣香味，你覺得這陣香味是下面的哪一種香味呢？</p>
        <div id="rcorners4" class="answer">
            <h3>A. 清爽肥皂香</h3>
            <p>你是50%，一般程度的外貌協會喔！</p>
            <p>雖然你會在意外表，但你不會要求對方一定要是大正妹大帥哥，只要可以看就可以接受！不過如果對方是個花瓶，你也一樣不會喜歡。個性、內涵、氣質方面你也不會忽視。</p>
        </div>

        <div id="rcorners4" class="answer">
            <h3>B. 濃濃奶香的蛋糕味道</h3>
            <p>你是45%，程度較低的外貌協會！</p>
            <p>外貌對你來說是比較不在乎的條件，你覺得能照顧、寵愛自己的人才是最重要的。</p>
        </div>

        <div id="rcorners4" class="answer">
            <h3>C. 花園的芬芳花香</h3>
            <p>你是90%，重視外貌到破表囉！！</p>
            <p> 就算對方是個有大正妹、大帥哥的外表的空殼，你還是會選擇跟他們交往！沒有亮麗的外貌，你根本不會注意到對方的存在，典型以貌取人的代表！</p>
        </div>
    
        <div id="rcorners4" class="answer">
            <h3>D. 義大利濃縮咖啡味</h3>
            <p>你是35%，最低程度！</p>
            <p>你對外貌重視的程度滿低的，比起會隨著時間消逝的外型，你比較相信對方的內涵才是長長久久。</p>
        </div>
    </div>
`

page.answer_bad = `
    <link rel="stylesheet" href="image gallery.css"/>
    <link rel="stylesheet" href="div_answer.css"/>

    <div id="rcorners3">
        <h2  style="text-align: center">你是不是毒舌派？</h2>
        <p>你覺得下列哪一種美容手術，最容易讓人看出破綻？</p>
        <div id="rcorners4" class="answer">
            <h3>A. 割雙眼皮</h3>
            <p>惡毒程度還算普普，不會對人趕盡殺絕，抓到人家的小辮子，你會說幾句暗示的話，只不過是想施加一點壓力，嚇唬嚇唬人家，只要達到威嚇的目的就夠了。</p>
            <p>你希望讓人知道自己也不是省油的燈，沒什麼事能瞞得過你，人家越是不想讓你知道的事，你就一定要把所有的細節全都查清楚，才會善罷甘休。</p>
        </div>

        <div id="rcorners4" class="answer">
            <h3>B. 豐胸</h3>
            <p>你的眼光超級銳利，口舌也相當犀利，擁有這兩把利刃，任何人只要讓你覺得很礙眼，肯定會被你批評得體無完膚，能剩下半條命已經算是不錯了。</p>
            <p>因為你不喜歡人家鬼鬼祟祟，做些見不得人的事，你的正義感告訴自己應該要把一切都攤在陽光下。不過，那只是你個人的道德標準，太過嚴厲也傷及了不少無辜。</p>
        </div>

        <div id="rcorners4" class="answer">
            <h3>C. 割除眼袋</h3>
            <p>你只不過比較愛探聽一些是非，那算是你的休閒活動之一，不過是用來排遣無聊，也不是那麼重要。所以你會聽聽別人不同的看法，然後以比較客觀來談人家的事。</p>
            <p>有時候，也會說幾句公道話。在這個唯恐天下人不起鬨的亂世裡，還有像你這樣願意就事論事、持平而論的人，可能已經要絕種了。</p>
        </div>
    
        <div id="rcorners4" class="answer">
            <h3>D. 隆鼻</h3>
            <p>你的心地還算挺善良的，不會和人家計較太多。對於別人的所作所為，你也認為那是個人的私德，與你無關。</p>
            <p>有時候你可能還會有點矯枉過正，甚至會怕知道別人太多的私事，又不知該如何面對，就乾脆不聞不問，假裝沒看見、沒聽到，免得惹禍上身，不過有時你也實在避嫌避過了頭。</p>
        </div>
    </div>
`

page.answer_sorry = `
    <link rel="stylesheet" href="image gallery.css"/>
    <link rel="stylesheet" href="div_answer.css"/>

    <div id="rcorners3">
        <h2  style="text-align: center">你會不會死不認錯？</h2>
        <p>如果你參加電視整人遊戲，答錯要接受處罰，下列有四種處罰，你勉強能夠接受哪一種？</p>
        <div id="rcorners4" class="answer">
            <h3>A. 被潑冷水</h3>
            <p>臉皮蠻厚的你覺得犯錯是正常的，皮厚一點混過去就好。</p>
            <p>這類型的人覺得一皮天下無難事，誰不會犯一點錯，自己或家人和朋友犯一點錯就算了。</p>
            <p>這類型的人蠻輕鬆看人生，有時候會裝傻，人家犯錯看在眼裡懶的說，只要自己過的開心就好。</p>
        </div>

        <div id="rcorners4" class="answer">
            <h3>B. 坐電椅小觸電</h3>
            <p>除非對方有理你才會認錯，否定你一定會跟他爭到底。</p>
            <p>這類型的人覺得有理走遍天下，頭腦黑白分明，除非對方說的讓他心服口服他才會服氣，非常堅持自己的原則。</p>
        </div>

        <div id="rcorners4" class="answer">
            <h3>C. 吃一口恐怖食物</h3>
            <p>死鴨子嘴硬的你，會把自己做錯的事說成沒有事。</p>
            <p>這類型的人很愛面子，犯了錯內心會覺得很不好意思，可是基於面子問題，就會裝沒事，很多事情能混就盡量混過去了。</p>
            <p>對自己的情況從來不張揚，所以很難被人挖到私隱，不過有時候也會因為而“高處不勝寒，心事無人知”，而黯然哦！</p>
        </div>
    
        <div id="rcorners4" class="answer">
            <h3>D. 座位突然往下掉</h3>
            <p>活在自己世界的你，覺得自己好像都沒犯過錯，都是別人的錯。</p>
            <p>這類型的人個性很簡單，而且非常直率，不過往往他的單純會造成別人的困擾。</p>
        </div>
    </div>
`

page.answer_private =`
    <link rel="stylesheet" href="image gallery.css"/>
    <link rel="stylesheet" href="div_answer.css"/>

    <div id="rcorners3">
        <h2  style="text-align: center">你有多注重關於自己的隱私？</h2>
        <p>心情煩悶時，會想要找個地方散散步，釋放心情，走在怎樣的路上是讓你覺得最能幫你釋放壓力的呢？</p>
        <div id="rcorners4" class="answer">
            <h3>A. 市中心最繁華的大道，霓虹燈下讓熱鬧的人氣趕走鬱悶</h3>
            <p>隱私密封度：70%</p>
            <p>表面上看起來張牙舞爪活潑開朗神經大條的你，人際關係很好，朋友多，也很善於和陌生人打交道，但是其實你的內心不像你的言行那麼open。</p>
            <p>相反，你是一個有事都自己藏在心裏的人，雖然平時你很喜歡和周邊的人分享生活點滴，但是重要的事情你都會默默藏在心底，緘口不談。</p>
        </div>

        <div id="rcorners4" class="answer">
            <h3>B. 蜿蜒曲折的近郊山路，像人生路，有崎嶇也有好風光</h3>
            <p>隱私密封度：50%</p>
            <p>應變能力強，喜歡新鮮]事物尋求刺激，好奇心重的你，由於你應變能力和聰明才智，不會輕易被人揭露私隱，倒是你喜歡去挖掘別人的私隱就是了。</p>
            <p>建議你有時候對別人的事情不要太好奇，八卦別人八卦多了小心對方以牙還牙。</p>
        </div>

        <div id="rcorners4" class="answer">
            <h3>C. 少有路人的空曠大道，任你獨自思考不受打擾</h3>
            <p>隱私密封度：90%</p>
            <p>你個性獨特，不喜歡與世俗之人為伍，能讓你打開話匣子的人少之又少，所以從來也就對八卦之人劃清界限，加上你大部分時間你都保持著低調神秘的氣質。</p>
            <p>對自己的情況從來不張揚，所以很難被人挖到私隱，不過有時候也會因為而“高處不勝寒，心事無人知”，而黯然哦！</p>
        </div>
    
        <div id="rcorners4" class="answer">
            <h3>D. 悠悠鄉間路，讓乾淨的空氣洗滌你的心情</h3>
            <p>隱私密封度：30%</p>
            <p> 其實對於你而言，基本上不存在什麼私隱不私隱的問題，善良的你有一顆寬容大度的心，你總是相信人性本善，而且你本人本生也就活的很透明，沒什麼藏著掖著的事，你也不喜歡帶著面具做人。</p>
            <p>善良是好，不過，還是要注意保護自己哦！</p>
        </div>
    </div>
`

page.answer_special =`
    <link rel="stylesheet" href="image gallery.css"/>
    <link rel="stylesheet" href="div_answer.css"/>

    <div id="rcorners3">
        <h2  style="text-align: center">你缺乏什麼特質？</h2>
        <p>如果有一天可以看到地獄的狀況，你會想看地獄中以下的哪一個部份呢？</p>
        <div id="rcorners4" class="answer">
            <h3>A. 閻羅王的審判過程</h3>
            <p>你缺乏自主的能量。</p>
            <p>你總是給人一種自信不足、逆來順受的感覺。你不喜歡跟別人有衝突、討厭比較，但不喜歡因此而被別人看扁，所以常常會在內心跟別人過不去，其實這樣反而更傷害自己，所以你最缺乏的是自主的能力。</p>
            <p>建議你可以多培養自己的興趣、想想如何規劃自己工作以外的生活，別再把自己關起來喔！</p>
        </div>

        <div id="rcorners4" class="answer">
            <h3>B. 受刑的過程</h3>
            <p>你缺乏同理心的能量。</p>
            <p>你會特別注重自己的感覺，常常將自己所遭受的困難無限擴大，像世界末日就快要降臨一樣。但是換作是別人遭遇到同樣的事，你反而會說得輕描淡寫一般，沒什麼大不了，所以你最缺乏的是同理心。</p>
            <p>建議你要多關心別人、去感受他們所遭遇的困難，別老是覺得自己好像在吃虧，這樣朋友可是會越來越少的。</p>
        </div>

        <div id="rcorners4" class="answer">
            <h3>C. 投胎的過程</h3>
            <p>你缺乏改變的能量。</p>
            <p>你在生活上給人很固定的感覺，也許你會覺得在生活上處處受限，或者是自我壓抑的能力很強，能夠忍受孤獨或是隱藏自己不想被人瞭解的部分，唯恐哪一天被人知道而無法自處，所以你最缺乏的是改變的勇氣。</p>
            <p>建議你要多注重自己的真實感受，嘗試把自己心裡想講的話說出來，好讓自己的孤單無助也有個地方可以休息吧！</p>
        </div>
    
        <div id="rcorners4" class="answer">
            <h3>D. 地獄的工作人員的休閒生活</h3>
            <p>你缺乏穩定的能量。</p>
            <p>你在生活上是個腦筋不錯、老是在改變的人，你很難被瞭解，思想也與一般人不太一樣，有興趣的事物也比較少人喜愛。雖然很多人佩服你的頭腦與才華，但是你的生活相當不穩定，總是感覺自己很不踏實，所以你最缺乏的是穩定的能量。</p>
            <p>建議你要克服自己老是跟他人唱反調的習慣，也許有時候你是對的，但要記得這世界上的對錯是由大多數的人所決定的，而不是你。</p>
        </div>

        <div id="rcorners4" class="answer">
            <h3>E. 上天堂的人做了什麼</h3>
            <p>你缺乏勤勞的能量。</p>
            <p>你具有商人的基因，做事有規劃、重步驟，是個能夠用最方便的方法得到最大利益的人，乍看之下是個穩重、值得可靠的人，但是你天性稍嫌懶惰、缺乏感性，不知道感情的可貴，所以常常給人有一種不太真實的感覺。</p>
            <p>建議你如果能夠多付出一點情感，在生活上勤勞一點，也許就會更受歡迎。</p>
        </div>
    </div>
`

page.answer_you =  `
    <link rel="stylesheet" href="image gallery.css"/>
    <link rel="stylesheet" href="div_answer.css"/>

    <div id="rcorners3">
        <h2  style="text-align: center">你是個怎樣的人？</h2>
        <p>以下哪種情況，會讓你覺得買了東西又懊悔？</p>
        <div id="rcorners4" class="answer">
            <h3>A. 品牌不具知名度</h3>
            <p>你喜歡受到別人重視，需要提升能力、地位或知名度。</p>
            <p>品味高使你不知不覺成為高消費者，如果你只一味追逐金錢滿足消費，不如反省一下。你更需要的是工作上的表現，才能博人重視。</p>
        </div>

        <div id="rcorners4" class="answer">
            <h3>B. 價錢太貴</h3>
            <p>你有很好的金錢觀，擅于理財。但是常因繁瑣小事及各種引誘而無法專心經營前途事業。</p>
            <p>你真正需要的是提升你的專業技術，使你有謀生能力，賺很多錢之後，做個快樂的理財人。</p>
        </div>

        <div id="rcorners4" class="answer">
            <h3>C. 樣式或顏色不喜歡</h3>
            <p>你常常忍不住要挑剔別人，甚至不留口德亂罵人，好像要求很高卻常常因為事情太多，而無法周詳地思考。</p>
            <p>常需要別人給你一些意見，但是別人的意見又不如你，你真正需要的是提升自己的品味，而且不受人影響你的決定才好。</p>
        </div>
    
        <div id="rcorners4" class="answer">
            <h3>D. 尺寸大小不適合</h3>
            <p>你喜歡輕松愉快無拘束。馬馬虎虎的個性使你博得人緣，常常異想天開地做些驚人的決定，好奇心很重。</p>
            <p>心中很少畏懼什麼，你真正需要的是訓練成為一個膽大心細的人才好，目前還太粗心。</p>
        </div>

        <div id="rcorners4" class="answer">
            <h3>E. 不夠流行</h3>
            <p>你有天真活潑的性格。精力充沛，好交朋友，常喜歡呼朋引伴地一道出門走走，天性外向好勝。</p>
            <p>需要贏過每一個挑戰者或競爭對手，因此你需要訓練某一方面才能特別優秀，來滿足你的榮譽心。</p>
        </div>
    </div>
`

page.answer_travel = `
    <link rel="stylesheet" href="image gallery.css"/>
    <link rel="stylesheet" href="div_answer.css"/>

    <div id="rcorners3">
        <h2  style="text-align: center">你目前面臨的心中轉機是什麼？</h2>
        <p>假設你有十天左右的假期，你會想做什麼樣的旅行呢？</p>
        <div id="rcorners4" class="answer">
            <h3>A. 獨自旅行</h3>
            <p>現在的你想面對自己，重新思考人生。比起外面的世界和他人的世界，你現在比較關係你自己的內心。</p>
            <p>目前的你，對於自己生活模式是否維持現壯就好？自己生活重心到底是什麼呢？而心存疑問。你強烈想重新審視自己目前為止的人生，或者，認為平常的自己其實不是真正的自己，也許只是虛假的表像而已。</p>
        </div>

        <div id="rcorners4" class="answer">
            <h3>B. 跟家人旅行</h3>
            <p>現在的你想要暫時從疲累的人際關係中的到解放。目前的你有一股強量的衝動想從日常的緊張狀態跳脫，讓自己放鬆。</p>
            <p>你可能平常習慣依場合而選擇說真心話或場面話，在職場上扮演好職員或工作人員，和同事相處表面上感情甚羈，而在人際關係上處處小心謹慎呢？這樣的你現在渴求的是打從心理可以放鬆，可以接受你的任性或放縱，像家人般的人際關係。</p>
        </div>

        <div id="rcorners4" class="answer">
            <h3>C. 跟好友旅行</h3>
            <p>現在的你想從工作的沉默的壓力，或人際關係逃脫。目前的你強烈想要越過無形的圍牆的到解脫，好好享受人生。</p>
            <p>你想盡量避免責任重大的事情，逃離工作和人際關係的束縛，一股想要更自由體驗的生活慾望高漲，或著，說不定有些事忍耐到極限了，"我要好好做我喜歡的事了"的心情已經形成了。</p>
        </div>
    
        <div id="rcorners4" class="answer">
            <h3>D. 短期留學或寄宿家庭</h3>
            <p>你現在洋溢著挑戰夢想和目標的熱情，就是現在，你很想去完成長久一直想完成的事。</p>
            <p>心中強烈希望因為這件事得到別人的肯定，你的野心勃勃，特別是讓工作或畢業生的職業達到自己設定的目標。因此，你可能要遠離無聊的人際關係，精神完全集中在自己的事。</p>
        </div>
    </div>
`

page.answer_mouth = `
    <link rel="stylesheet" href="image gallery.css"/>
    <link rel="stylesheet" href="div_answer.css"/>

    <div id="rcorners3">
        <h2  style="text-align: center">你是容易洩密的大嘴巴嗎？</h2>
        <p>你到住在鄉下的朋友家作客,每天清早聽蟲鳴鳥叫,傍晚在田間散佈看落日,愜意得不得了。請問，覺得以下哪一個最能代表農村氣息？</p>
        <div id="rcorners4" class="answer">
            <h3>A. 大碗的飯菜</h3>
            <p>你很享受傳遞秘密的快感，「自認為」具有職業道德，能隱忍住茲事體大的大秘密不說。</p>
            <p>其實不然，你的洩密標準只有「會害到自已」或「不會害到自已」這兩種，至於別人的生死則不太關心。</p>
        </div>

        <div id="rcorners4" class="answer">
            <h3>B. 稻草人</h3>
            <p>你對於聽別人的秘密這件事，是極有興趣的，但不錯的是，你具有「只進不出」的功力。</p>
            <p>尤其是會影響到他人的利害關係，或可能引發負面效應的秘密，你絕口不提，是值得信賴的人。</p>
        </div>

        <div id="rcorners4" class="answer">
            <h3>C. 動物糞便與泥土混合的味道</h3>
            <p>好其心人皆有之，對於別人的秘密，你也不是全然的冷漠，只是一想到一旦知道秘密後，就要時時刻刻提高警覺保守秘密。</p>
            <p>就覺得很麻煩，倒不如什麼都不知道，也就什麼都不怕洩露了。</p>
        </div>
    
        <div id="rcorners4" class="answer">
            <h3>D. 在門前空地玩耍的小孩</h3>
            <p>要是有人敢跟你說什麼不可告人秘密，又要求你心須幫忙保守秘密，無疑是一種自殺式行為，因為你在這方面的能力幾乎等於零。</p>
            <p>如果你實在無法改掉愛洩密的習慣，那就請你拒絕聽秘密，以免害人害已。</p>
        </div>
    </div>
`

page.answer_shy = `
    <link rel="stylesheet" href="image gallery.css"/>
    <link rel="stylesheet" href="div_answer.css"/>

    <div id="rcorners3">
        <h2  style="text-align: center">你的臉皮有多厚？</h2>
        <p>假如有一天，你得了怪病，要接受醫院的治療，你覺得哪一種最痛苦？</p>

        <div id="rcorners4" class="answer">
            <h3>A. 七天七夜不准進食</h3>
            <p>厚臉皮指數 55％：除非要留住對方的心，否則會算了。</p>
            <p>這類型的人很忠於自我，他覺得凡事不要強求，兩個人在一起自然就好了，不必讓自己做一些很可笑的事情來逗對方開心，簡單就好。不過當對方想變心或第三者出現就會有一些小小的改變，例如說一些貼心的話或者送禮物…等等。</p>
        </div>

        <div id="rcorners4" class="answer">
            <h3>B. 同時照胃鏡＋大腸鏡</h3>
            <p>厚臉皮指數 80％：為了要讓對方開心就會做出沒臉皮的事情。</p>
            <p>這類型的人內心深處希望雙方相處的氣氛是很開心的，如果兩個人相處很無聊時就會講一些笑話或是撒嬌，或者是做一些很可愛的小動作讓對方感受到自己的愛意。</p>
        </div>

        <div id="rcorners4" class="answer">
            <h3>C. 被連續扎三十針</h3>
            <p>厚臉皮指數 99％：根本不知道愛情中有臉皮這回事。</p>
            <p>這類型的人覺得兩人世界中好玩最重要，關起門來什麼都可以玩，不需要太拘謹，想要怎樣就怎樣，不過另一半心臟不夠強時會被嚇個半死。</p>
        </div>
    
        <div id="rcorners4" class="answer">
            <h3>D. 全身毛髮剃光光。</h3>
            <p>厚臉皮指數 20％：什麼事都會不想多說。</p>
            <p>這類型的人臉皮超薄，薄到像衛生紙一樣，一碰就會破掉。自尊心又超強，覺得不在一起就算了，誤會也不用解釋，既然對方這麼不瞭解自己，那也沒有什麼話好說了。</p>
        </div>
    </div>
`

page.answer_princess = `
    <link rel="stylesheet" href="image gallery.css"/>
    <link rel="stylesheet" href="div_answer.css"/>

    <div id="rcorners3">
        <h2  style="text-align: center">你的個性是哪種類型？</h2>
        <p>你一次機會做童話女主角，你最想當誰？</p>

        <div id="rcorners4" class="answer">
            <h3>A. 灰姑娘</h3>
            <p>你是一個腳踏實地、貫徹到底的人，做是刻苦耐勞很有恆心。不過，你卻也是一個不善溝通的人，就像灰姑娘一樣，默默忍受一堆做不完的家事(事情)，卻只懂得在一旁偷偷哭泣。</p>
            <p>因為你可吃苦，有恆心，這優點對你的事業有很大的幫助，也增加了別人對你的信賴。</p>
        </div>

        <div id="rcorners4" class="answer">
            <h3>B. 花木蘭</h3>
            <p>你是一個主觀，並且不願意受人牽制的人，有很強的忍耐力，亦從不怕失敗。不過你也很好勝，不能接受別人超越你，就像花木蘭一樣，忍受一切挫折與困難，去爭取第一。</p>
            <p>所以，你要特別注意，將這份強烈的好勝心藏於心中。雖然，在工作上有助於闖出天下，建立宏大的事業，但在人際關係上，卻很容易受到排斥。</p>
        </div>

        <div id="rcorners4" class="answer">
            <h3>C. 愛麗絲</h3>
            <p>你是一個有領導才能和高度判斷力的人，，任何事情到了你手，總是能夠快速完善地解決，就像愛麗絲一樣，解決一個又一個的難題。</p>
            <p>但是，因為你有優越才能，所以你很容易驕傲！小心，這樣是不會有人想跟你做朋友的。</p>
        </div>
    
        <div id="rcorners4" class="answer">
            <h3>D. 白雪公主的後母</h3>
            <p>你是一個平穩的人，因為你的思想早熟且消極，性格具有憂鬱的傾向，而且心中存在著不安，就像白雪公主的後母一樣，妒忌白雪公主比她美麗，一心一意想要除掉她，好使自己成為世界上最美麗的人。</p>
            <p>不過因為你亦是一個多才多藝的人，所以你是朋友心目中崇拜的人呢！</p>
        </div>

        <div id="rcorners4" class="answer">
            <h3>E. 美人魚</h3>
            <p>你是一個天生勤奮的人，不論做什麼事情都很認真，也很負責，不過你的固執就像追求真愛的美人魚一樣，為了愛而不顧旁人的勸告，只要能夠陪伴王子就足夠了。</p>
            <p>但是，一旦決定了就堅持到底的個性卻很危險呢！成功固然好，如果失敗了，有可能會像被壞巫婆詛咒一樣，最後還是得不償失。</p>
        </div>
    </div>
`

page.character = `
    <link rel="stylesheet" href="image gallery.css"/>

    <div class="gallery" onclick="ui.show(page.answer_princess)">
        <a>
            <img src="princess.jpg" alt="princess" style="width=300px; height=250px">
        </a>
        <div>
            <h3 style="text-align: center">你的個性是哪種類型？</h3>
        </div>
    </div>

    <div class="gallery" onclick="ui.show(page.answer_you)">
        <a>
            <img src="you.png" alt="you" style="width=300px; height=250px">
        </a>
        <div>
            <h3 style="text-align: center">你是個怎樣的人？</h3>
        </div>
    </div>
    

    <div class="gallery" onclick="ui.show(page.answer_special)" style="position:absolute; left:410px; top:130px">
        <a>
            <img src="special.jpg" alt="special" style="width=300px; height=250px">
        </a>
        <div>
            <h3 style="text-align: center">你缺乏什麼特質？</h3>
        </div>
    </div>

    <div class="gallery" onclick="ui.show(page.answer_private)" style="position:absolute; left:410px; top:514px">
        <a>
            <img src="private.jpg" alt="private" style="width=300px; height=250px">
        </a>
        <div>
            <h3 style="text-align: center">你有多注重關於自己的隱私？</h3>
        </div>
    </div>

    <div class="gallery" onclick="ui.show(page.answer_pan)" style="position:absolute; left:811px; top:130px">
        <a>
            <img src="pan.jpg" alt="pan" style="width=300px; height=250px">
        </a>
        <div>
            <h3 style="text-align: center">你的耍狠程度？</h3>
        </div>
    </div>

    <div class="gallery" onclick="ui.show(page.answer_know)" style="position:absolute; left:811px; top:514px">
        <a>
            <img src="know.jpg" alt="know" style="width=300px; height=250px">
        </a>
        <div>
            <h3 style="text-align: center">看看你裝傻的本領？</h3>
        </div>
    </div>

`

page.interesting = `
    <link rel="stylesheet" href="image gallery.css"/>

    <div class="gallery" onclick="ui.show(page.answer_mouth)">
        <a>
            <img src="mouth.jpg" alt="mouth" width="300" height="250">
        </a>
        <div>
            <h3 style="text-align: center">你是容易洩密的大嘴巴嗎？</h3>
        </div>
    </div>

    <div class="gallery" onclick="ui.show(page.answer_travel)">
        <a>
            <img src="travel.jpg" alt="travel" style="width=300; height=250px">
        </a>
        <div>
            <h3 style="text-align: center">你目前面臨的心中轉機是什麼？</h3>
        </div>
    </div>
    
    <div class="gallery" onclick="ui.show(page.answer_sorry)" style="position:absolute; left:410px; top:130px">
        <a>
            <img src="sorry.jpg" alt="sorry" style="width=300px; height=250px">
        </a>
        <div>
            <h3 style="text-align: center">你會不會死不認錯？</h3>
        </div>
    </div>

    <div class="gallery" onclick="ui.show(page.answer_sad)" style="position:absolute; left:410px; top:514px">
        <a>
            <img src="sad.jpeg" alt="sad" style="width=300px; height=250px">
        </a>
        <div>
            <h3 style="text-align: center">你受委屈時的反應？</h3>
        </div>
    </div>

    <div class="gallery" onclick="ui.show(page.answer_alone)" style="position:absolute; left:811px; top:130px">
        <a>
            <img src="alone.jpg" alt="alone" style="width=300px; height=250px">
        </a>
        <div>
            <h3 style="text-align: center">看穿你的寂寞？</h3>
        </div>
    </div>

    <div class="gallery" onclick="ui.show(page.answer_bad)" style="position:absolute; left:811px; top:514px">
        <a>
            <img src="bad.jpg" alt="bad" style="width=300px; height=250px">
        </a>
        <div>
            <h3 style="text-align: center">你是不是毒舌派？</h3>
        </div>
    </div>

`
page.love = `
    <link rel="stylesheet" href="image gallery.css"/>
    <div class="gallery" onclick="ui.show(page.answer_shy)">
        <a>
            <img src="shy.png" alt="shy" width="300" height="250">
        </a>
        <div>
            <h3 style="text-align: center">你的臉皮有多厚？</h3>
        </div>
    </div>

    
    <div class="gallery" onclick="ui.show(page.answer_face)">
        <a>
            <img src="face.jpg" alt="face" style="width=300; height=250px">
        </a>
        <div>
            <h3 style="text-align: center">你真的不是外貌協會嗎？</h3>
        </div>
    </div>
    
    <div class="gallery" onclick="ui.show(page.answer_flower)" style="position:absolute; left:410px; top:130px">
        <a>
            <img src="flower.jpeg" alt="flower" style="width=300px; height=250px">
        </a>
        <div>
            <h3 style="text-align: center">你花心程度？</h3>
        </div>
    </div>

    <div class="gallery" onclick="ui.show(page.answer_mood)" style="position:absolute; left:410px; top:514px">
        <a>
            <img src="mood.jpg" alt="mood" style="width=300px; height=250px">
        </a>
        <div>
            <h3 style="text-align: center">你的性情如何？</h3>
        </div>
    </div>

    <div class="gallery" onclick="ui.show(page.answer_fear)" style="position:absolute; left:811px; top:130px">
        <a>
            <img src="fear.jpg" alt="fear" style="width=300px; height=250px">
        </a>
        <div>
            <h3 style="text-align: center">你最害怕哪一方面被套牢？</h3>
        </div>
    </div>

    <div class="gallery" onclick="ui.show(page.answer_sence)" style="position:absolute; left:811px; top:514px">
        <a>
            <img src="sence.jpg" alt="sence" style="width=300px; height=250px">
        </a>
        <div>
            <h3 style="text-align: center">你的愛情觀是什麼？</h3>
        </div>
    </div>
`

page.webmaster = `
    <link rel="stylesheet" href="forms_table.css"/>

    <div id="rcorners3">
        <div class="box2"><img src="title.png"/></div>
        <div class="box1"><img src="name.png"/></div>
        <div id="container" style=" width:600px; height:350px; padding-top:30px; margin:0 auto"></div>
        <table>
            <tr>
                <td>GitHub</td>
                <td><a style="color:rgb(255, 177, 32)" href="https://github.com/SherryChen0304">https://github.com/SherryChen0304</a></td>
            </tr>
            <tr>
                <td>E-mail</td>
                <td><a style="color:rgb(255, 177, 32)">dearsherrychen@gmail.com</a></td>
            </tr>
            <tr>
                <td>FaceBook</td>
                <td><a style="color:rgb(255, 177, 32)" href="https://www.facebook.com/sherry.chen.35380399">https://www.facebook.com/sherry.chen</a></td>
            </tr>
        </table>
    </div>
`

page.purpose = `
    <link rel="stylesheet" href="forms_table.css"/>
    <link rel="stylesheet" href="drop_list_search.css"/>

    <div id="rcorners1">
        <p class="z">
            <h2 style="font-family:'微軟正黑體'">創站動機</h2>
            <p class="x" style="font-family:'微軟正黑體';font-size: 14pt">如何更認識自己一點？也許是藉由與自己的獨處，也許是聽從別人口中的自己。又或許，我們可以藉由一些小測驗，來了解自己。這裡都能為大家一一解惑！適合在繁忙間的歇息時間瀏覽的網頁，讓疲累的身心放輕鬆一下！</p>
        </p>
    </div>
    <div id="rcorners2">
        <div class="z">
            <h3>參考資料(元件素材)</h3>
            <p class="y">
                ColorHexa
                <a href="https://www.colorhexa.com">https://www.colorhexa.com</a>
            </p>

            <p class="y">
                CaseIf
                <a href="http://www.caself.me/products">http://www.caself.me/products</a>
            </p>

            <p class="y">
                ZhenHaoTV
                <a href="http://www.zhenhaotv.com">http://www.zhenhaotv.com</a>
            </p>

            <p class="y">
                履歷表
                <a href="https://www.webdesignerdepot.com/2016/11/free-download-free-resume-template/">https://www.webdesignerdepot.com/2016/11/free-download-free-resume-template/</a>
            </p>

            <p class="y">
                CakeResume
                <a href="https://www.cakeresume.com/resumes">https://www.cakeresume.com/resumes</a>
            </p>
        </div>

        <div class="z">
            <h3>w3school:</h3>
            <p class="y">
                Dropdowns
                <a href="https://www.w3schools.com/css/tryit.asp?filename=trycss_dropdown_navbar">https://www.w3schools.com/css/tryit.asp?filename=trycss_dropdown_navbar</a>
            </p>
            <p class="y">
                Lists
                <a href="https://www.w3schools.com/css/tryit.asp?filename=trycss_list-style-type_ex">https://www.w3schools.com/css/tryit.asp?filename=trycss_list-style-type_ex</a>
            </p>
            <p class="y">
                Forms_search
                <a href="https://www.w3schools.com/css/tryit.asp?filename=trycss_form_search_anim">https://www.w3schools.com/css/tryit.asp?filename=trycss_form_search_anim</a>
            </p>
            <p class="y">
                Forms_login_signin
                <a href="https://www.w3schools.com/css/tryit.asp?filename=trycss_forms">https://www.w3schools.com/css/tryit.asp?filename=trycss_forms</a>
            </p>
            <p class="y">
                Image Gallery
                <a href="https://www.w3schools.com/css/tryit.asp?filename=trycss_image_gallery">https://www.w3schools.com/css/tryit.asp?filename=trycss_image_gallery</a>
            </p>
        </div>

        <div class="z">
            <h3>菜鳥教程:</h3>
            <p class="y">
                CSS3分頁
                <a href="http://www.runoob.com/try/try.php?filename=trycss_ex_pagination_active_round">http://www.runoob.com/try/try.php?filename=trycss_ex_pagination_active_round</a>
            </p>
            <p class="y">
                CSS Table表格
                <a href="http://www.runoob.com/css/css-table.html">http://www.runoob.com/css/css-table.html</a>
            </p>
            <p class="y">
                CSS 圓角
                <a href="http://www.runoob.com/css3/css3-border-radius.html">http://www.runoob.com/css3/css3-border-radius.html</a>
            </p>
            <p class="y">
                CSS 過渡（滑動）
                <a href="http://www.runoob.com/try/try.php?filename=trycss3_transition">http://www.runoob.com/try/try.php?filename=trycss3_transition</a>
            </p>
            <p class="y">
                Highcharts 基本條形圖
                <a href="http://www.runoob.com/try/try.php?filename=highcharts_bar_basic">http://www.runoob.com/try/try.php?filename=highcharts_bar_basic</a>
            </p>
        </div>
    </div>
`

page.login = `
    <link rel="stylesheet" href="forms_table.css"/>

    <div class="y">
        <h2>會員登入</h2>
        <form>
            <label for="name">使用者名稱</label>
            <input type="text" id="name" name="name" placeholder="Your name..">

            <label for="possword">密碼</label>
            <input type="text" id="possword" name="possword" placeholder="Your possword..">
        
            <input type="submit" value="登入">
            <Button onclick="ui.show(page.signin)">加入會員</Button>
        </form>
    </div>
`

page.logout = `
    <link rel="stylesheet" href="forms_table.css"/>
    <div class="y">
        <h2>確認登出</h2>
        <form>
            <input type="submit" value="登出">
        </form>
    </div>
`

page.signin = `
    <link rel="stylesheet" href="forms_table.css"/>

    <div class="y">
        <h2>建立你的帳戶</h2>
    <form>
        <label for="name">使用者名稱</label>
        <input type="text" id="name" name="name" placeholder="Your name..">

        <label for="possword">密碼</label>
        <input type="text" id="possword" name="possword" placeholder="Your possword..">

        
        <label for="email">電子信箱</label>
        <input type="text" id="email" name="email" placeholder="Your email address..">
    
        <input type="submit" value="註冊">
    </form>
    </div>
`

// page.story = `
// <h1>這是註冊頁！</h1>
// <Button>Signin</Button>
// `

// page.emotion = `
// <h1>這是註冊頁！</h1>
// <Button>Signin</Button>
// `

// page.encourage = `
// <h1>這是註冊頁！</h1>
// <Button>Signin</Button>
// `



