import React, { Component } from 'react'
import { Input, Button, Tooltip } from 'antd'
import ReferenceCss from './index.module.css'

export default class Reference extends Component {
  /* 爬虫结果的返回数据 */
  referenceData = {
    // name：关键词；url：参考题库来源网站；content：爬虫OCR返回结果
    "name": "计算机网络",
    "url": "https://www.nowcoder.com/discuss/1937",
    "content": "OSI分层（7层）：物理层、数据链路层、网络层、传输层、会话层、表示层、应用层。\nTCP/IP分层（4层）：网络接口层、 网际层、运输层、 应用层。\n五层协议     （5层）：物理层、数据链路层、网络层、运输层、 应用层。\n物理层：RJ45、CLOCK、IEEE802.3    （中继器，集线器，网关）\n数据链路：PPP、FR、HDLC、VLAN、MAC  （网桥，交换机）\n网络层：IP、ICMP、ARP、RARP、OSPF、IPX、RIP、IGRP、 （路由器）\n每一层的协议如下：\n传输层：TCP、UDP、SPX\n会话层：NFS、SQL、NETBIOS、RPC\n表示层：JPEG、MPEG、ASII\n应用层：FTP、DNS、Telnet、SMTP、HTTP、WWW、NFS\n每一层的作用如下：\n物理层：通过媒介传输比特,确定机械及电气规范（比特Bit）\n数据链路层：将比特组装成帧和点到点的传递（帧Frame）\n网络层：负责数据包从源到宿的传递和网际互连（包PackeT）\n传输层：提供端到端的可靠报文传递和错误恢复（段Segment）\n会话层：建立、管理和终止会话（会话协议数据单元SPDU）\n表示层：对数据进行翻译、加密和压缩（表示协议数据单元PPDU）\n应用层：允许访问OSI环境的手段（应用协议数据单元APDU）\nIP地址的分类\nA类地址：以0开头， 第一个字节范围：0~127（1.0.0.0 - 126.255.255.255）；\nB类地址：以10开头，    第一个字节范围：128~191（128.0.0.0 - 191.255.255.255）；\nC类地址：以110开头，  第一个字节范围：192~223（192.0.0.0 - 223.255.255.255）；\n10.0.0.0—10.255.255.255， 172.16.0.0—172.31.255.255， 192.168.0.0—192.168.255.255。（Internet上保留地址用于内部）\nTFTP协议： 是TCP/IP协议族中的一个用来在客户机与服务器之间进行简单文件传输的协议，提供不复杂、开销不大的文件传输服务。"
  }

  render() {
    return (
      <div className={ReferenceCss.mainWrapper}>
        <div className={ReferenceCss.infoWrapper}>
          <div className={ReferenceCss.searchWrapper}>
            <p>请输入搜索课程的关键词</p>
            <Input className={ReferenceCss.searchInput} placeholder="例：计算机网络" allowClear />,
            <Button id={ReferenceCss.searchButton} shape='round' size='small'> 立即搜索 </Button>
            <Button id={ReferenceCss.changeButton} shape='round' size='small'> 换&nbsp;一&nbsp;批 </Button>
          </div>
          <Tooltip placement="topLeft" title="参考题库来源网站：https://www.nowcoder.com/discuss/1937">
            <p className={ReferenceCss.whereIsFrom}>参考题库来源网站：https://www.nowcoder.com/discuss/1937</p>
          </Tooltip>
        </div>
        <div className={ReferenceCss.detailsWrapper}>
          <p> {this.referenceData.content} </p>
        </div>
      </div>
    )
  }
}
