import Dashboard from "../../Dashboard";

function AddNews() {
  return (
    <Dashboard>
      <form >
      <div className="field">
        <label  className="label">
          عنوان خبر
        </label>
        <div className="control">
          <input placeholder="این عنوان است" type="text" className="input" />
        </div>
      </div>
      <div className="field">
        <label  className="label">
          متن خبر
        </label>
        <div className="control">
         <textarea placeholder="این متن است" className="textarea"></textarea>
        </div>
      </div>
      <div className="field">
        <label  className="label">
            دسته بندی خبر
        </label>
        <div className="control">
         <div className="select is-fullwidth">
            <select >
                <option >تست</option>
            </select>
         </div>
        </div>
      </div>
      <div className="field">
        <label  className="label">
           تصاویر خبر
        </label>
      <div class="file has-name is-boxed is-primary">
  <label class="file-label">
    <input class="file-input" type="file" name="resume"/>
    <span class="file-cta">
      <span class="file-icon">
        <i class="fas fa-upload"></i>
      </span>
      <span class="file-label-text">انتخاب فایل</span>
    </span>
    <span class="file-name">
      هیچ فایلی انتخاب نشده
    </span>
  </label>
</div>

      </div>
      <div className="field mt-6">
        <div className="control"><button className="button is-success px-6">دخیره</button></div>
      </div>
      </form>
    </Dashboard>
  );
}

export default AddNews;
