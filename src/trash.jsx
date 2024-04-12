<section class="slot-col">
        <div class="strip"
        style={{top: getOffset(symbol1)}}>
          {slots.map(
            (s)=>(<div className="slot-item">{s}</div>)
          )}
          </div>
      </section>
      <section class="slot-col">
        <div class="strip"
        style={{top: getOffset(symbol2)}}>
          {slots.map(
          (s)=>(<div className="slot-item">{s}</div>)
        )}</div>
      </section>
      <section class="slot-col">
        <div class="strip"
        style={{top: getOffset(symbol3)}}> 
        {slots.map(
            (s)=>(<div className="slot-item">{s}</div>)
          )}</div>
        </section>