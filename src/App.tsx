import axios from "axios"
import { useEffect, useState } from "react"

function App() {
  const [ordem, setOrdem] = useState('')

  function handleOrdem(event) {

    const tempOrdem = event.target.value
    setOrdem(tempOrdem)

    if(tempOrdem.length == 9) {
      // console.log(tempOrdem.length)
      
      // useEffect(() => {
      //   axios(`https://localhost:3004/ordens/` + {ordem})
      //     .then(response =>  {
      //       console.log(response)
      //     })
      //     .catch(error => {
      //       console.error('Erro ao conectar:', error )
      //     })
      //     .finally()
      // })
    }

  }
  return (
    <>

      <form>
        <label htmlFor="ordem">Ordem</label>
        <input type="text" id="ordem" value={ordem} onChange={handleOrdem}/>
      </form>

      <table>
        <thead>
          <tr key={0}>
            <th>Ordem</th>
            <th>Modelo</th>
            <th>Cor</th>
            <th>Pares</th>
          </tr>
        </thead>

        <tbody>
          <tr key={ordem}>
            <td>{ordem}</td>
            <td>Dynamic</td>
            <td>BCOPTO</td>
            <td>1.200</td>
          </tr>
        </tbody>

      </table>
      
      <table>
        <tr key="Tam">
          <th>33</th>
          <th>34</th>
          <th>35</th>
          <th>36</th>
          <th>37</th>
          <th>38</th>
          <th>38</th>
          <th>39</th>
          <th>40</th>
          <th>41</th>
          <th>42</th>
          <th>43</th>
          <th>44</th>
        </tr>
        <tr key="tamvalue">
          <td>200</td>
          <td>100</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </table>
    </>
  )
}

export default App
